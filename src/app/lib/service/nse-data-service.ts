import { IMarketData } from "./i-market-data";
import { Injectable } from "@angular/core";
import cheerio from 'cheerio';
import { CsvHelper, HistoryTick } from "../common-types";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import * as moment from 'moment';


@Injectable()
export class NseDataService implements IMarketData {


    constructor(private readonly http: HttpClient) {

    }

    public getHistory(symbol: string): Observable<any> {

        const url = this.getNseHistoryUrl(symbol);
        return this.http.get(url, { responseType: 'text' });

    }

    private getNseHistoryUrl(symbol: string): string {

        const now = moment();
        const today = now.format('DD-MM-YYYY');
        const lastYear = now.subtract(10, 'days').format('DD-MM-YYYY');
        const url = `https://www.nseindia.com/products/dynaContent/common/productsSymbolMapping.jsp?symbol=${symbol}&segmentLink=3&symbolCount=1&series=EQ&dateRange=12month&fromDate=&toDate=&dataType=PRICEVOLUMEDELIVERABLE`;
        return url;
    }

    private historyUrl = 'https://www.nseindia.com/products/dynaContent/common/productsSymbolMapping.jsp?symbol=yesbank&segmentLink=3&symbolCount=1&series=ALL&dateRange=+&fromDate=05-05-2019&toDate=04-06-2019&dataType=PRICEVOLUMEDELIVERABLE';

    public getTickHistory(symbol: string): Promise<any> {

        let pr = this.getHistory(symbol).toPromise();

        return pr.then(x => {

            const body = x;

            const $ = cheerio.load(body);
            let csvData = $('div[id=csvContentDiv]').text();

            csvData = csvData.replace(/:/g, "\n");;

            let arr = CsvHelper.CSV2JSON(csvData);
            let arrHistory = JSON.parse(arr);

            const arrHisTick: HistoryTick[] = [];

            if (arrHistory.length > 0) {
                arrHistory.forEach((_currentValue: any, _index: number, _arr: any) => {
                    arrHisTick.push(HistoryTick.GetHistoryQuote(_currentValue));
                });
            }
            arrHisTick.pop();
            return arrHisTick;

        });

    }
}

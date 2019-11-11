import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import moment from 'moment';
import cheerio from 'cheerio';
import { CsvHelper, HistoryTick } from "../common-types";

@Injectable()
export class NseIndexDataService {
    constructor(private readonly http: HttpClient) {

    }

    public getHistory(symbol: string): Observable<any> {

        const url = this.getNseHistoryUrl(symbol);
        return this.http.get(url, { responseType: 'text' });

    }

    private getNseHistoryUrl(symbol: string): string {

        const now = moment();
        const today = now.format('DD-MM-YYYY');
        const lastYear = now.subtract(360, 'days').format('DD-MM-YYYY');
        const url = `https://www.nseindia.com/products/dynaContent/equities/indices/historicalindices.jsp?indexType=${symbol}&fromDate=${lastYear}&toDate=${today}`;

        return url;
    }

    public getIndexTickHistory(symbol: string): Promise<any> {

        let pr = this.getHistory(symbol).toPromise();

        return pr.then(x => {

            const body = x;
            console.log(body);
            const $ = cheerio.load(body);
            let csvData = $('div[id=csvContentDiv]').text();
            console.log(csvData);
            csvData = csvData.replace(/:/g, "\n");;

            let arr = CsvHelper.CSV2JSON(csvData);
            let arrHistory = JSON.parse(arr);

            const arrHisTick: HistoryTick[] = [];

            if (arrHistory.length > 0) {
                arrHistory.forEach((_currentValue: any, _index: number, _arr: any) => {
                    _currentValue.Symbol = symbol
                    arrHisTick.push(HistoryTick.GetIndexHistoryQuote(_currentValue));
                });
            }
            arrHisTick.pop();
            return arrHisTick;

        });

    }
}
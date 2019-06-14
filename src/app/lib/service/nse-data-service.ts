import { IMarketData } from "./i-market-data";
import { Injectable } from "@angular/core";

import axios from 'axios';

import cheerio from 'cheerio';
import cheerioTableparser from 'cheerio-tableparser';
import { CsvHelper, HistoryTick } from "../common-types";



@Injectable()
export class NseDataService implements IMarketData {


    private historyUrl = 'https://www.nseindia.com/products/dynaContent/common/productsSymbolMapping.jsp?symbol=yesbank&segmentLink=3&symbolCount=1&series=ALL&dateRange=+&fromDate=05-05-2019&toDate=04-06-2019&dataType=PRICEVOLUMEDELIVERABLE';

    public getTickHistory(): Promise<any> {




        const ret = axios({
            method: 'GET',
            url: this.historyUrl,
            headers: {
                Host: 'www.nseindia.com',
                Referer: 'https://www.nseindia.com/products/content/equities/equities/eq_security.htm',
                Agent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',



            }
        });

        const historyPromise1 = new Promise((resolve, _reject) => {

            ret.then(x => {

                const body = x.data;
                //console.log(body);

                const $ = cheerio.load(body);

                //console.log($('div[class=opttbldata]').html());

                let csvData = $('div[id=csvContentDiv]').text();
                console.log(csvData);

                csvData = csvData.replace(/:/g, "\n");;

                let arr = CsvHelper.CSV2JSON(csvData);
                let arrHistory = JSON.parse(arr);

                const arrHisTick: HistoryTick[] = [];

                if (arrHistory.length > 0) {
                    arrHistory.forEach((_currentValue: any, _index: number, _arr: any) => {
                        arrHisTick.push(HistoryTick.GetHistoryQuote(_currentValue));
                    });
                }
                console.log(arrHisTick);

                resolve(arrHisTick);
            });
        });

        console.log(ret);

        return historyPromise1;
    }



}

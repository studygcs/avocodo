import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import cheerio from 'cheerio';
import cheerioTableparser from 'cheerio-tableparser';
import { OptionCallPut } from "./../../lib/common-types";
import { parse } from "querystring";


let optionchain = 'https://www.nseindia.com/live_market/dynaContent/live_watch/option_chain/optionKeys.jsp?segmentLink=17&instrument=OPTIDX&symbol=NIFTY&date=-';


@Injectable()
export class OptionsChainService {

    constructor(private readonly http: HttpClient) {

    }

    public getOptionChain(): Promise<any> {


        const ocPromise = new Promise((resolve, reject) => {
            this.http.get(optionchain, { responseType: 'text' }).toPromise().then(
                response => {

                    console.log('in');
                    // if (!error && response.statusCode == 200) 
                    {
                        console.log('in');
                        const $ = cheerio.load(response);

                        var table = $('div[class=opttbldata]').html();

                        var t = cheerio.load(table);
                        console.log(t);

                        cheerioTableparser(t);

                        var data = t("#octable").parsetable(true, true, true);
                        console.log(data);

                        const arrOptionChain = this.getOptionsChain(data);
                        console.log(arrOptionChain);
                        resolve(arrOptionChain);

                        console.log('out');


                    }
                }).catch(error => {
                    console.log(error);
                    reject(error);
                });

        });


        return ocPromise;
    }

    getOptionsChain(opChain): OptionCallPut[] {

        let arrOptionChain: OptionCallPut[] = [];
        for (let i = 2; i < opChain[0].length - 1; i++) {
            let optionCallPut = new OptionCallPut();
            optionCallPut.callOI = this.getNumber(opChain[1][i]);
            optionCallPut.callChangeInOI = this.getNumber(opChain[2][i]);
            optionCallPut.callVolume = this.getNumber(opChain[3][i]);
            optionCallPut.callIV = this.getNumber(opChain[4][i]);
            optionCallPut.callLTP = this.getNumber(opChain[5][i]);
            optionCallPut.callNetChng = this.getNumber(opChain[6][i]);
            optionCallPut.callBidQty = this.getNumber(opChain[7][i]);
            optionCallPut.callBidPrice = this.getNumber(opChain[8][i]);
            optionCallPut.callAskPrice = this.getNumber(opChain[9][i]);
            optionCallPut.callAskQty = this.getNumber(opChain[10][i]);

            optionCallPut.strikePrice = this.getNumber(opChain[11][i]);

            optionCallPut.putOI = this.getNumber(opChain[21][i]);
            optionCallPut.putChangeInOI = this.getNumber(opChain[20][i]);
            optionCallPut.putVolume = this.getNumber(opChain[19][i]);
            optionCallPut.putIV = this.getNumber(opChain[18][i]);
            optionCallPut.putLTP = this.getNumber(opChain[17][i]);
            optionCallPut.putNetChng = this.getNumber(opChain[16][i]);
            optionCallPut.putBidQty = this.getNumber(opChain[15][i]);
            optionCallPut.putBidPrice = this.getNumber(opChain[14][i]);
            optionCallPut.putAskPrice = this.getNumber(opChain[13][i]);
            optionCallPut.putAskQty = this.getNumber(opChain[12][i]);

            arrOptionChain.push(optionCallPut);
        }

        return arrOptionChain;
    }

    getNumber(num: string): number {
        var parsed = parseFloat(num);
        if (isNaN(parsed)) {
            return 0;
        }
        return parsed;
    }

}



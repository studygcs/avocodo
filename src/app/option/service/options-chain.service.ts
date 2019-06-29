import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import cheerio from 'cheerio';
import cheerioTableparser from 'cheerio-tableparser';


let optionchain = 'https://www.nseindia.com/live_market/dynaContent/live_watch/option_chain/optionKeys.jsp?segmentLink=17&instrument=OPTIDX&symbol=NIFTY&date=-';


@Injectable()
export class OptionsChainService {

    constructor(private readonly http: HttpClient) {

    }

    public getOptionChain(): Promise<any> {


        const ocPromise = new Promise((resolve, _reject) => {
            this.http.get(optionchain, { responseType: 'text' }).toPromise().then(
                response => {

                    console.log('in');
                    // if (!error && response.statusCode == 200) 
                    {

                        console.log('in');


                        const $ = cheerio.load(response);

                        //console.log($('div[class=opttbldata]').html());

                        var table = $('div[class=opttbldata]').html();

                        var t = cheerio.load(table);
                        console.log(t);

                        cheerioTableparser(t);
                        //console.log(table);
                        var data = t("#octable").parsetable(true, true, true);
                        console.log(data);
                        resolve(data);

                        console.log('out');


                    }
                });

        });


        return ocPromise;
    }
}



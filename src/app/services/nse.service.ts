import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';

@Injectable()
export class NseService {

  href = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=^NSEBANK&apikey=8B7J3CQ98YMC2X2V';

  optionchain = 'https://www.nseindia.com/live_market/dynaContent/live_watch/option_chain/optionKeys.jsp?segmentLink=17&instrument=OPTIDX&symbol=NIFTY&date=-';

  constructor(
    private http: HttpClient,
    private readonly restangular: Restangular,
    private jsonp: Jsonp) { }

  public getOptionChain(): any {

    // this.http.get<any>(this.optionchain).subscribe( option => {
    // console.log(option);
    //  }, error => {
    //    console.log(error);
    //  }
    // )

    this.jsonp.request(this.optionchain).subscribe(option => {
      console.log(option);
    }, error => {
      console.log(error);
    }
    )
  }


  getCandles(symbol?: string, series?: string): Observable<any> {
    console.log('xxxxxxxxxxxxxx');
    console.log(symbol);
    console.log(series);
    if (symbol !== undefined || symbol != null) {
      let requestUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=8B7J3CQ98YMC2X2V`;

      if (series !== undefined || series != null) {
        requestUrl = `https://www.alphavantage.co/query?function=${series}&symbol=${symbol}&apikey=8B7J3CQ98YMC2X2V`;
        console.log(requestUrl);
      }

      console.log(requestUrl);

      return this.http.get<any>(requestUrl);

    }
    return this.http.get<any>(this.href);
  }


}
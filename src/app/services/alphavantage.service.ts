import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

export class AlphavantageService {
    href = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=^NSEBANK&apikey=8B7J3CQ98YMC2X2V';
    constructor(private http: HttpClient) { }
  
  
  
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
  
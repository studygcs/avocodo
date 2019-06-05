import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jsonp, Response} from '@angular/http';

@Injectable()
export class NseService {

  href = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=^NSEBANK&apikey=8B7J3CQ98YMC2X2V';

  optionchain = 'https://www.nseindia.com/live_market/dynaContent/live_watch/option_chain/optionKeys.jsp?segmentLink=17&instrument=OPTIDX&symbol=NIFTY&date=-';

  constructor(private http: HttpClient, private jsonp: Jsonp) { }

  public getOptionChain() : any {

    // this.http.get<any>(this.optionchain).subscribe( option => {
    // console.log(option);
    //  }, error => {
    //    console.log(error);
    //  }
    // )

    this.jsonp.request(this.optionchain).subscribe( option => {
    console.log(option);
     }, error => {
       console.log(error);
     }
    )
  }

}
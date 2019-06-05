import { Component } from '@angular/core';
import * as API from 'indian-stock-exchange';

import * as C from 'cheerio';

import * as CTP from 'cheerio-tableparser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to My World';

  getData() : void {
    var NSEAPI = API.NSE;
var BSEAPI = API.BSE;
 
 
// Examples
 
// NSEAPI.getIndices()
// .then(function (response) { 
//   console.log(response.data); //return the api data
// });

 
NSEAPI.getCandleStickData('RELIANCE', 1, false)
.then(function (response) { 
  console.log(response.data); //return the api data
});

    alert('hi');
  }
}

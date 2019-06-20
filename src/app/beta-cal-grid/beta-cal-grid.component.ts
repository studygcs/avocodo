import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable, of as observableOf } from 'rxjs';
import { StockHistory } from './../data/stock-history';
import { Candle } from './../data/candle';
import { StockObserverService } from './../services/stock-observer.service';
import { StockSymbol } from './../data/stock-symbol';
import { NseDataService } from './../lib/service';

@Component({
  selector: 'app-beta-cal-grid',
  templateUrl: './beta-cal-grid.component.html',
  styleUrls: ['./beta-cal-grid.component.css']
})
export class BetaCalGridComponent implements AfterViewInit {

  displayedColumns: string[] = ['date', 'open', 'high', 'low', 'close', 'high_low', 'open_close'];
  exampleDatabase: ExampleHttpDatabase | null;
  data: Candle[] = [];

  stockHistory: StockHistory = new StockHistory();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  marketDataService: MarketDataService;

  constructor(private http: HttpClient,
     private readonly stockObserver: StockObserverService,
     private readonly nseService: NseDataService) {
    this.marketDataService = new MarketDataService(http);
    // this.stockObserver.subscribeStockChanges(this.stockChange);
    this.stockObserver.stockChange.subscribe(stock => {
      this.stockChange(stock);
    });

    this.stockObserver.seriesStockChange.subscribe(stock => {
      this.getHistory(stock.symbol.symbol, stock.series);
    });
    // this.stockHistory = new StockHistory();
  }

  public stockChange(stockSymbol: StockSymbol): void {
    console.log(stockSymbol);
    this.getHistory(stockSymbol.symbol);
  }

  ngAfterViewInit() {

    // this.getHistory();
  }

  getHistory(stock?: string, series?: string) {
    console.log(stock);
    this.nseService.getTickHistory().then( marketData => {
      console.log(marketData);
    }).catch(reason => {
      console.log(reason);
    });
    }

  getHighLowAverage(): number {
    return CandleBL.getHighLowAverage(this.data);
  }

  getOpenCloseAverage(): number {
    return CandleBL.getOpenCloseAverage(this.data);
  }

}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  constructor(private http: HttpClient) { }

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get<GithubApi>(requestUrl);
  }
}

export class MarketDataService {
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


export class CandleBL {

  public static getHighLowAverage(candles: Candle[]): number {

    if (candles === undefined || candles.length < 1) {
      return 0;
    }
    return candles.map(candle => candle.high_low)
      .reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue) / candles.length;
  }

  public static getOpenCloseAverage(candles: Candle[]): number {

    return this.average(candles, 'open_close');
  }

  public static average(candles: Candle[], prop: string): number {

    if (candles === undefined || candles.length < 1) {
      return 0;
    }
    return candles.map(candle => candle[prop])
      .reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue) / candles.length;
  }

}
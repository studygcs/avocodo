import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable, of as observableOf } from 'rxjs';
import { StockHistory } from './../data/stock-history';
import { Candle } from './../data/candle';
import { StockObserverService } from './../services/stock-observer.service';
import { StockSymbol } from './../data/stock-symbol';
import { NseDataService } from './../lib/service';
import { HistoryTick } from 'app/lib/common-types';
import { WeekMonthHandler } from 'app/bl/week-month-handler';

@Component({
  selector: 'app-beta-cal-grid',
  templateUrl: './beta-cal-grid.component.html',
  styleUrls: ['./beta-cal-grid.component.css']
})
export class BetaCalGridComponent implements AfterViewInit {

  displayedColumns: string[] = ['date', 'open', 'high', 'low', 'close', "high_low", "open_close"];

  data: HistoryTick[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,
    private readonly stockObserver: StockObserverService,
    private readonly nseService: NseDataService) {


    this.stockObserver.stockChange.subscribe(stock => {
      this.stockChange(stock);
    });

    this.stockObserver.seriesStockChange.subscribe(stock => {
      this.stockChange(stock.symbol);
    });

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
    this.nseService.getTickHistory(stock).then(marketData => {
      //this.data = marketData;
      let wmHandler = new WeekMonthHandler();
      this.data = wmHandler.getWeeks(marketData);
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


export class CandleBL {

  public static getHighLowAverage(candles: HistoryTick[]): number {

    if (candles === undefined || candles.length < 1) {
      return 0;
    }
    let average = candles.map(candle => candle.high_low)
      .reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue) / candles.length;

    return Number(average.toFixed(2));
  }

  public static getOpenCloseAverage(candles: HistoryTick[]): number {

    return this.average(candles, 'open_close');
  }

  public static average(candles: HistoryTick[], prop: string): number {

    if (candles === undefined || candles.length < 1) {
      return 0;
    }
    let average = candles.map(candle => candle[prop])
      .reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue) / candles.length;
    return Number(average.toFixed(2));
  }

}
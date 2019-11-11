import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { StockObserverService } from './../services/stock-observer.service';
import { SeriesSymbol, DateSeries } from './../data/stock-symbol';
import { NseDataService } from './../lib/service';
import { HistoryTick } from './../lib/common-types';
import { WeekMonthHandler } from './../bl/week-month-handler';
import { NseIndexDataService } from './../lib/service/nse-Index-data.service';

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
    private readonly nseService: NseDataService,
    private readonly nseIndexSer: NseIndexDataService) {


    // this.stockObserver.stockChange.subscribe(stock => {
    //   this.stockChange(stock);
    // });

    this.stockObserver.seriesStockChange.subscribe(stock => {
      if (!stock.isIndex) {
        this.stockChange(stock);
      } else {
        console.log("index call: " + stock);
        this.nseIndexSer.getIndexTickHistory(stock.symbol.symbol).then(marketData => {
          let wmHandler = new WeekMonthHandler();
          switch (stock.series) {
            case DateSeries.DIALY:
              this.data = marketData;
              break;
            case DateSeries.WEEKLY:
              this.data = wmHandler.getWeeks(marketData);
              break;
            case DateSeries.MONTHLY:
              this.data = wmHandler.getMonths(marketData);
              break;
          }


          console.log(marketData);
        }).catch(reason => {
          console.log(reason);
        });

      }
    });

  }

  public stockChange(stockSymbol: SeriesSymbol): void {
    console.log(stockSymbol);
    this.getHistory(stockSymbol.symbol.symbol, stockSymbol.series);
  }

  ngAfterViewInit() {

    // this.getHistory();
  }

  getHistory(stock?: string, series?: DateSeries) {
    console.log(stock);
    this.nseService.getTickHistory(stock).then(marketData => {
      let wmHandler = new WeekMonthHandler();
      switch (series) {
        case DateSeries.DIALY:
          this.data = marketData;
          break;
        case DateSeries.WEEKLY:
          this.data = wmHandler.getWeeks(marketData);
          break;
        case DateSeries.MONTHLY:
          this.data = wmHandler.getMonths(marketData);
          break;
      }


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
    let average = candles.map(candle => Math.abs(candle[prop]))
      .reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue) / candles.length;
    return Number(average.toFixed(2));
  }

}
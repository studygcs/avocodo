import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StockSymbol, SeriesSymbol } from './../data/stock-symbol';

@Injectable()
export class StockObserverService {

  public stockChange: Subject<StockSymbol> = new Subject<StockSymbol>();

  public seriesStockChange: Subject<SeriesSymbol> = new Subject<SeriesSymbol>();

  constructor() { }

  subscribeStockChanges(func: any): void {
    this.stockChange.subscribe(stock => func(stock));
  }

  updateStock(stockSymbol: StockSymbol): void {
    this.stockChange.next(stockSymbol);
  }

    updateSeriesStock(stockSymbol: SeriesSymbol): void {
    this.seriesStockChange.next(stockSymbol);
    
  }

}
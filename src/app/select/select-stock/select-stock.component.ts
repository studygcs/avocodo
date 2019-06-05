import { Component, OnInit } from '@angular/core';
import { StockSymbol, SeriesSymbol, Series } from './../../data/stock-symbol';
import { StockObserverService } from './../../services/stock-observer.service';

@Component({
  selector: 'app-select-stock',
  templateUrl: './select-stock.component.html',
  styleUrls: ['./select-stock.component.css']
})
export class SelectStockComponent {

  constructor(private readonly stockObserver: StockObserverService) {

  }

  selectedValue: StockSymbol;

  weeklySelSybol: StockSymbol;

  foods: StockSymbol[] = [
    { symbol: 'JSWSTEEL.NS', name: 'JSWSTEEL' },
    { symbol: 'RELIANCE.NS', name: 'Reliance' },

    { symbol: '^NSEI', name: 'Nifty 50' },
    { symbol: '^NSEBANK', name: 'BANK NIFTY' }
  ];


  selChange(event): void {

    this.stockObserver.updateStock(event.value);


  }

  selWeeklyChange(event): void {

    const seriesSymbol: SeriesSymbol = { symbol: event.value, series: Series.WEEKLY }

    this.stockObserver.updateSeriesStock(seriesSymbol);
    console.log(seriesSymbol);


  }
}


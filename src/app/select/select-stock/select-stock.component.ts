import { Component, OnInit } from '@angular/core';
import { StockSymbol, SeriesSymbol, Series, DateSeries } from './../../data/stock-symbol';
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

  monthlySelSybol: StockSymbol;

  foods: StockSymbol[] = [
    { symbol: 'JSWSTEEL', name: 'JSWSTEEL' },
    { symbol: 'RELIANCE', name: 'RELIANCE' },
    { symbol: 'YESBANK', name: 'YESBANK' },
    { symbol: 'TATAMOTORS', name: 'TATAMOTORS' },
    { symbol: 'HDFCBANK', name: 'HDFCBANK' },

    { symbol: '^NSEI', name: 'Nifty 50' },
    { symbol: '^NSEBANK', name: 'BANK NIFTY' }
  ];


  selChange(event): void {

    const seriesSymbol: SeriesSymbol = { symbol: event.value, series: DateSeries.DIALY }

    this.stockObserver.updateSeriesStock(seriesSymbol);
    console.log(seriesSymbol);


  }

  selWeeklyChange(event): void {

    const seriesSymbol: SeriesSymbol = { symbol: event.value, series: DateSeries.WEEKLY }

    this.stockObserver.updateSeriesStock(seriesSymbol);
    console.log(seriesSymbol);
  }

  selMonthlyChange(event): void {

    const seriesSymbol: SeriesSymbol = { symbol: event.value, series: DateSeries.MONTHLY }

    this.stockObserver.updateSeriesStock(seriesSymbol);
    console.log(seriesSymbol);

  }
}


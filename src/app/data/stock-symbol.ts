
export interface StockSymbol {
  symbol: string;
  name: string;
}

export const Series = {
  DIALY : 'TIME_SERIES_DAILY',
  WEEKLY : 'TIME_SERIES_WEEKLY',
  MONTHLY : 'TIME_SERIES_MONTHLY',
}

export enum DateSeries {
  DIALY = 1,
  WEEKLY,
  MONTHLY
}

export interface SeriesSymbol {
  symbol: StockSymbol;
  series: DateSeries;
  isIndex: boolean;
}
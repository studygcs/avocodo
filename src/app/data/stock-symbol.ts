
export interface StockSymbol {
  symbol: string;
  name: string;
}

export const Series = {
  DIALY : 'TIME_SERIES_DAILY',
  WEEKLY : 'TIME_SERIES_WEEKLY',
}

export interface SeriesSymbol {
  symbol: StockSymbol;
  series: string;
}
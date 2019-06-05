import { Candle } from './candle';
export class CandleImpl implements Candle {
  open: number = 0;
  high: number = 0;
  low: number = 0;
  close: number = 0;
  volume: number = 0;
  date: Date;

  get high_low () :number { 
    return this.high - this.low;
  };
  get open_close(): number {
    return Math.abs(this.open - this.close);
  };

  // constructor(candleData: any) {

  //   this.open = candleData.open;
  //   this.high = candleData.high;
  //   this.low = candleData.low;
  //   this.close = candleData.close;
  //   this.volume = candleData.volume;
  //   this.date = candleData.date;

  // }

}
import { HistoryTick } from "../lib/common-types";

export class TickBL {

    public static getHighLowAverage(candles: HistoryTick[]): number {

        if (candles === undefined || candles.length < 1) {
            return 0;
        }
        return candles.map(candle => candle.high_low)
            .reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue) / candles.length;
    }

    public static getOpenCloseAverage(candles: HistoryTick[]): number {

        return this.average(candles, 'open_close');
    }

    public static average(candles: HistoryTick[], prop: string): number {

        if (candles === undefined || candles.length < 1) {
            return 0;
        }
        return candles.map(candle => candle[prop])
            .reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue) / candles.length;
    }

    public static max(candles: HistoryTick[], prop: string): number {

        if (candles === undefined || candles.length < 1) {
            return 0;
        }
        let numArr = candles.map(candle => Number(candle[prop]))
        return Math.max(...numArr);
        //.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue) / candles.length;
    }

    public static min(candles: HistoryTick[], prop: string): number {

        if (candles === undefined || candles.length < 1) {
            return 0;
        }
        let numArr = candles.map(candle => Number(candle[prop]))
        return Math.min(...numArr);
        //.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue) / candles.length;
    }

}
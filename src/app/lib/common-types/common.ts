/**
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
*/
export function getPlural(str: any): string {
  return "from getPlural";
}

export class HistoryTick {
  public symbol: string = '';
  public date: Date = new Date();

  public prevClose: number = 0;
  public open: number = 0;
  public high: number = 0;
  public low: number = 0;
  public last: number = 0;
  public close: number = 0;
  public averagePrice: number = 0;

  public totalTradedQuantity: number = 0;
  public Turnover: number = 0;
  public NoOfTrades: number = 0;
  public deliverableQty: number = 0;
  public percentageDlyQtytoTradedQty: number = 0;

  public get high_low(): number {
    return this.high - this.low;
  };
  public get open_close(): number {
    return this.open - this.close;
  };




  public static GetHistoryQuote(tick: any): HistoryTick {
    const historyTick = new HistoryTick();
    historyTick.symbol = tick['Symbol'];
    // historyTick. = tick['Series'];
    historyTick.date = tick['Date'];
    historyTick.prevClose = parseInt(tick['Prev Close']);
    historyTick.open = parseInt(tick['Open Price']);
    historyTick.high = parseInt(tick['High Price']);
    historyTick.low = parseInt(tick['Low Price']);
    historyTick.last = parseInt(tick['Last Price']);
    historyTick.close = parseInt(tick['Close Price']);
    historyTick.averagePrice = parseInt(tick['Average Price']);
    historyTick.totalTradedQuantity = parseInt(tick['Total Traded Quantity']);
    historyTick.Turnover = parseInt(tick['Turnover']);
    historyTick.NoOfTrades = parseInt(tick['No. of Trades']);
    historyTick.deliverableQty = parseInt(tick['Deliverable Qty']);
    historyTick.percentageDlyQtytoTradedQty = parseInt(tick['% Dly Qt to Traded Qty']);

    return historyTick;
  }

  public static GetIndexHistoryQuote(tick: any): HistoryTick {
    const historyTick = new HistoryTick();
    historyTick.symbol = tick['Symbol'];
    // historyTick. = tick['Series'];
    historyTick.date = tick['Date'];
    historyTick.prevClose = parseInt(tick['Prev Close']);
    historyTick.open = parseInt(tick['Open']);
    historyTick.high = parseInt(tick['High']);
    historyTick.low = parseInt(tick['Low']);
    historyTick.last = parseInt(tick['Last Price']);
    historyTick.close = parseInt(tick['Close']);
    historyTick.averagePrice = parseInt(tick['Average Price']);
    historyTick.totalTradedQuantity = parseInt(tick['Total Traded Quantity']);
    historyTick.Turnover = parseInt(tick['Turnover (Rs. Cr)']);
    historyTick.NoOfTrades = parseInt(tick['Shares Traded']);
    historyTick.deliverableQty = parseInt(tick['Deliverable Qty']);
    historyTick.percentageDlyQtytoTradedQty = parseInt(tick['% Dly Qt to Traded Qty']);

    return historyTick;
  }
}

export class Quote {

  public name: string = '';
  public symbolName: string = '';
  public dataTime: Date = new Date();
  public previousClose: number = 0;

  public change: number = 0;
  public open: number = 0;
  public low: number = 0;
  public high: number = 0;
  public last: number = 0;
  public bid: number = 0;
  public ask: number = 0;
}

export class Greeks {
  public implied_volatility: number = 0;
  public delta: number = 0;
  public gamma: number = 0;
  public vega: number = 0;
  public theta: number = 0;
  public time: number = 0;
  public interest: number = 0;
  public dividend_rate: number = 0;
}

export class Option {
  public stocks_per_contract: number = 0;
  public DEFAULT_STOCKS_PER_CONTRACT: number = 0;
  public type: string = '';
  public stock: string = '';
  public symbol: string = '';
  public strike: number = 0;
  public expiration: Date = new Date();

  public last: number = 0;
  public change: number = 0;
  public bid: number = 0;
  public ask: number = 0;
  public timevalue: number = 0;


  public volume: number = 0;
  public open_int: number = 0;
  public update_timestamp: Date = new Date();
  public greeks: Greeks = new Greeks();
}

export class OptionCallPut {
  public callOI: number = 0;
  public callChangeInOI: number = 0;
  public callVolume: number = 0;
  public callIV: number = 0;
  public callLTP: number = 0;
  public callNetChng: number = 0;
  public callBidQty: number = 0;
  public callBidPrice: number = 0;
  public callAskPrice: number = 0;
  public callAskQty: number = 0;

  public strikePrice: number = 0;

  public putOI: number = 0;
  public putChangeInOI: number = 0;
  public putVolume: number = 0;
  public putIV: number = 0;
  public putLTP: number = 0;
  public putNetChng: number = 0;
  public putBidQty: number = 0;
  public putBidPrice: number = 0;
  public putAskPrice: number = 0;
  public putAskQty: number = 0;

}

export class Mainhelp {
  public getQuote(ticker: string): void {

  }

  public CorrectSymbol(ticker: string): string {
    //ticker = ticker.ToUpper().Trim().Replace(".NS", "");
    switch (ticker) {
      case "NIFTY":
        return "^NIFTY";
      case "BANKNIFTY":
        return "^BANKNIFTY";
      case "NIFTYBANK":
        return "^BANKNIFTY";
      case "MINIFTY":
      case "JUNIOR":
      case "^JUNIOR":
        return "^MINIFTY";
      case "NIFTYINFRA":
        return "^NIFTYINFRA";
      case "NIFTYIT":
        return "^NIFTYIT";
      case "NIFTYPSE":
        return "^NIFTYPSE";
      case "NIFTYMCAP50":
        return "^NIFTYMCAP50";
      case "NIFTYCPSE":
        return "^NIFTYCPSE";
      default:
        return ticker;
    }
  }
}
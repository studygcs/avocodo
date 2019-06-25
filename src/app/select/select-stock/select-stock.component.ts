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

    // { symbol: 'NIFTY', name: 'Nifty 50' },
    // { symbol: 'BANKNIFTY', name: 'BANK NIFTY' },
    // { symbol: 'NIFTYIT', name: 'NIFTY IT' },

    { symbol: 'JSWSTEEL', name: 'JSWSTEEL' },
    { symbol: 'RELIANCE', name: 'RELIANCE' },
    { symbol: 'YESBANK', name: 'YESBANK' },
    { symbol: 'TATAMOTORS', name: 'TATAMOTORS' },
    { symbol: 'HDFCBANK', name: 'HDFCBANK' }
  ];

  // from https://www.nseindia.com/content/fo/fo_underlyinglist.htm

  fandOSymbols: StockSymbol[] = [

    { symbol: 'ACC', name: 'ACC' },
    { symbol: 'ADANIENT', name: 'ADANIENT' },
    { symbol: 'ADANIPORTS', name: 'ADANIPORTS' },
    { symbol: 'ADANIPOWER', name: 'ADANIPOWER' },
    { symbol: 'AJANTPHARM', name: 'AJANTPHARM' },
    { symbol: 'ALBK', name: 'ALBK' },
    { symbol: 'AMARAJABAT', name: 'AMARAJABAT' },
    { symbol: 'AMBUJACEM', name: 'AMBUJACEM' },
    { symbol: 'APOLLOHOSP', name: 'APOLLOHOSP' },
    { symbol: 'APOLLOTYRE', name: 'APOLLOTYRE' },
    { symbol: 'ARVIND', name: 'ARVIND' },
    { symbol: 'ASHOKLEY', name: 'ASHOKLEY' },
    { symbol: 'ASIANPAINT', name: 'ASIANPAINT' },
    { symbol: 'AUROPHARMA', name: 'AUROPHARMA' },
    { symbol: 'AXISBANK', name: 'AXISBANK' },
    { symbol: 'BAJAJ-AUTO', name: 'BAJAJ-AUTO' },
    { symbol: 'BAJAJFINSV', name: 'BAJAJFINSV' },
    { symbol: 'BAJFINANCE', name: 'BAJFINANCE' },
    { symbol: 'BALKRISIND', name: 'BALKRISIND' },
    { symbol: 'BANKBARODA', name: 'BANKBARODA' },
    { symbol: 'BANKINDIA', name: 'BANKINDIA' },
    { symbol: 'BATAINDIA', name: 'BATAINDIA' },
    { symbol: 'BEL', name: 'BEL' },
    { symbol: 'BEML', name: 'BEML' },
    { symbol: 'BERGEPAINT', name: 'BERGEPAINT' },
    { symbol: 'BHARATFIN', name: 'BHARATFIN' },
    { symbol: 'BHARATFORG', name: 'BHARATFORG' },
    { symbol: 'BHARTIARTL', name: 'BHARTIARTL' },
    { symbol: 'BHEL', name: 'BHEL' },
    { symbol: 'BIOCON', name: 'BIOCON' },
    { symbol: 'BOSCHLTD', name: 'BOSCHLTD' },
    { symbol: 'BPCL', name: 'BPCL' },
    { symbol: 'BRITANNIA', name: 'BRITANNIA' },
    { symbol: 'BSOFT', name: 'BSOFT' },
    { symbol: 'CADILAHC', name: 'CADILAHC' },
    { symbol: 'CANBK', name: 'CANBK' },
    { symbol: 'CANFINHOME', name: 'CANFINHOME' },
    { symbol: 'CASTROLIND', name: 'CASTROLIND' },
    { symbol: 'CEATLTD', name: 'CEATLTD' },
    { symbol: 'CENTURYTEX', name: 'CENTURYTEX' },
    { symbol: 'CESC', name: 'CESC' },
    { symbol: 'CGPOWER', name: 'CGPOWER' },
    { symbol: 'CHENNPETRO', name: 'CHENNPETRO' },
    { symbol: 'CHOLAFIN', name: 'CHOLAFIN' },
    { symbol: 'CIPLA', name: 'CIPLA' },
    { symbol: 'COALINDIA', name: 'COALINDIA' },
    { symbol: 'COLPAL', name: 'COLPAL' },
    { symbol: 'CONCOR', name: 'CONCOR' },
    { symbol: 'CUMMINSIND', name: 'CUMMINSIND' },
    { symbol: 'DABUR', name: 'DABUR' },
    { symbol: 'DCBBANK', name: 'DCBBANK' },
    { symbol: 'DHFL', name: 'DHFL' },
    { symbol: 'DISHTV', name: 'DISHTV' },
    { symbol: 'DIVISLAB', name: 'DIVISLAB' },
    { symbol: 'DLF', name: 'DLF' },
    { symbol: 'DRREDDY', name: 'DRREDDY' },
    { symbol: 'EICHERMOT', name: 'EICHERMOT' },
    { symbol: 'ENGINERSIN', name: 'ENGINERSIN' },
    { symbol: 'EQUITAS', name: 'EQUITAS' },
    { symbol: 'ESCORTS', name: 'ESCORTS' },
    { symbol: 'EXIDEIND', name: 'EXIDEIND' },
    { symbol: 'FEDERALBNK', name: 'FEDERALBNK' },
    { symbol: 'GAIL', name: 'GAIL' },
    { symbol: 'GLENMARK', name: 'GLENMARK' },
    { symbol: 'GMRINFRA', name: 'GMRINFRA' },
    { symbol: 'GODFRYPHLP', name: 'GODFRYPHLP' },
    { symbol: 'GODREJCP', name: 'GODREJCP' },
    { symbol: 'GODREJIND', name: 'GODREJIND' },
    { symbol: 'GRASIM', name: 'GRASIM' },
    { symbol: 'GSFC', name: 'GSFC' },
    { symbol: 'HAVELLS', name: 'HAVELLS' },
    { symbol: 'HCLTECH', name: 'HCLTECH' },
    { symbol: 'HDFC', name: 'HDFC' },
    { symbol: 'HDFCBANK', name: 'HDFCBANK' },
    { symbol: 'HEROMOTOCO', name: 'HEROMOTOCO' },
    { symbol: 'HEXAWARE', name: 'HEXAWARE' },
    { symbol: 'HINDALCO', name: 'HINDALCO' },
    { symbol: 'HINDPETRO', name: 'HINDPETRO' },
    { symbol: 'HINDUNILVR', name: 'HINDUNILVR' },
    { symbol: 'HINDZINC', name: 'HINDZINC' },
    { symbol: 'IBULHSGFIN', name: 'IBULHSGFIN' },
    { symbol: 'ICICIBANK', name: 'ICICIBANK' },
    { symbol: 'ICICIPRULI', name: 'ICICIPRULI' },
    { symbol: 'IDBI', name: 'IDBI' },
    { symbol: 'IDEA', name: 'IDEA' },
    { symbol: 'IDFC', name: 'IDFC' },
    { symbol: 'IDFCFIRSTB', name: 'IDFCFIRSTB' },
    { symbol: 'IFCI', name: 'IFCI' },
    { symbol: 'IGL', name: 'IGL' },
    { symbol: 'INDIACEM', name: 'INDIACEM' },
    { symbol: 'INDIANB', name: 'INDIANB' },
    { symbol: 'INDIGO', name: 'INDIGO' },
    { symbol: 'INDUSINDBK', name: 'INDUSINDBK' },
    { symbol: 'INFIBEAM', name: 'INFIBEAM' },
    { symbol: 'INFRATEL', name: 'INFRATEL' },
    { symbol: 'INFY', name: 'INFY' },
    { symbol: 'IOC', name: 'IOC' },
    { symbol: 'IRB', name: 'IRB' },
    { symbol: 'ITC', name: 'ITC' },
    { symbol: 'JETAIRWAYS', name: 'JETAIRWAYS' },
    { symbol: 'JINDALSTEL', name: 'JINDALSTEL' },
    { symbol: 'JISLJALEQS', name: 'JISLJALEQS' },
    { symbol: 'JSWSTEEL', name: 'JSWSTEEL' },
    { symbol: 'JUBLFOOD', name: 'JUBLFOOD' },
    { symbol: 'JUSTDIAL', name: 'JUSTDIAL' },
    { symbol: 'KAJARIACER', name: 'KAJARIACER' },
    { symbol: 'KOTAKBANK', name: 'KOTAKBANK' },
    { symbol: 'KSCL', name: 'KSCL' },
    { symbol: 'KTKBANK', name: 'KTKBANK' },
    { symbol: 'L&TFH', name: 'L&TFH' },
    { symbol: 'LICHSGFIN', name: 'LICHSGFIN' },
    { symbol: 'LT', name: 'LT' },
    { symbol: 'LUPIN', name: 'LUPIN' },
    { symbol: 'M&M', name: 'M&M' },
    { symbol: 'M&MFIN', name: 'M&MFIN' },
    { symbol: 'MANAPPURAM', name: 'MANAPPURAM' },
    { symbol: 'MARICO', name: 'MARICO' },
    { symbol: 'MARUTI', name: 'MARUTI' },
    { symbol: 'MCDOWELL-N', name: 'MCDOWELL-N' },
    { symbol: 'MCX', name: 'MCX' },
    { symbol: 'MFSL', name: 'MFSL' },
    { symbol: 'MGL', name: 'MGL' },
    { symbol: 'MINDTREE', name: 'MINDTREE' },
    { symbol: 'MOTHERSUMI', name: 'MOTHERSUMI' },
    { symbol: 'MRF', name: 'MRF' },
    { symbol: 'MRPL', name: 'MRPL' },
    { symbol: 'MUTHOOTFIN', name: 'MUTHOOTFIN' },
    { symbol: 'NATIONALUM', name: 'NATIONALUM' },
    { symbol: 'NBCC', name: 'NBCC' },
    { symbol: 'NCC', name: 'NCC' },
    { symbol: 'NESTLEIND', name: 'NESTLEIND' },
    { symbol: 'NHPC', name: 'NHPC' },
    { symbol: 'NIITTECH', name: 'NIITTECH' },
    { symbol: 'NMDC', name: 'NMDC' },
    { symbol: 'NTPC', name: 'NTPC' },
    { symbol: 'OFSS', name: 'OFSS' },
    { symbol: 'OIL', name: 'OIL' },
    { symbol: 'ONGC', name: 'ONGC' },
    { symbol: 'ORIENTBANK', name: 'ORIENTBANK' },
    { symbol: 'PAGEIND', name: 'PAGEIND' },
    { symbol: 'PCJEWELLER', name: 'PCJEWELLER' },
    { symbol: 'PEL', name: 'PEL' },
    { symbol: 'PETRONET', name: 'PETRONET' },
    { symbol: 'PFC', name: 'PFC' },
    { symbol: 'PIDILITIND', name: 'PIDILITIND' },
    { symbol: 'PNB', name: 'PNB' },
    { symbol: 'POWERGRID', name: 'POWERGRID' },
    { symbol: 'PVR', name: 'PVR' },
    { symbol: 'RAMCOCEM', name: 'RAMCOCEM' },
    { symbol: 'RAYMOND', name: 'RAYMOND' },
    { symbol: 'RBLBANK', name: 'RBLBANK' },
    { symbol: 'RECLTD', name: 'RECLTD' },
    { symbol: 'RELCAPITAL', name: 'RELCAPITAL' },
    { symbol: 'RELIANCE', name: 'RELIANCE' },
    { symbol: 'RELINFRA', name: 'RELINFRA' },
    { symbol: 'REPCOHOME', name: 'REPCOHOME' },
    { symbol: 'RPOWER', name: 'RPOWER' },
    { symbol: 'SAIL', name: 'SAIL' },
    { symbol: 'SBIN', name: 'SBIN' },
    { symbol: 'SHREECEM', name: 'SHREECEM' },
    { symbol: 'SIEMENS', name: 'SIEMENS' },
    { symbol: 'SOUTHBANK', name: 'SOUTHBANK' },
    { symbol: 'SRF', name: 'SRF' },
    { symbol: 'SRTRANSFIN', name: 'SRTRANSFIN' },
    { symbol: 'STAR', name: 'STAR' },
    { symbol: 'SUNPHARMA', name: 'SUNPHARMA' },
    { symbol: 'SUNTV', name: 'SUNTV' },
    { symbol: 'SUZLON', name: 'SUZLON' },
    { symbol: 'SYNDIBANK', name: 'SYNDIBANK' },
    { symbol: 'TATACHEM', name: 'TATACHEM' },
    { symbol: 'TATACOMM', name: 'TATACOMM' },
    { symbol: 'TATAELXSI', name: 'TATAELXSI' },
    { symbol: 'TATAGLOBAL', name: 'TATAGLOBAL' },
    { symbol: 'TATAMOTORS', name: 'TATAMOTORS' },
    { symbol: 'TATAMTRDVR', name: 'TATAMTRDVR' },
    { symbol: 'TATAPOWER', name: 'TATAPOWER' },
    { symbol: 'TATASTEEL', name: 'TATASTEEL' },
    { symbol: 'TCS', name: 'TCS' },
    { symbol: 'TECHM', name: 'TECHM' },
    { symbol: 'TITAN', name: 'TITAN' },
    { symbol: 'TORNTPHARM', name: 'TORNTPHARM' },
    { symbol: 'TORNTPOWER', name: 'TORNTPOWER' },
    { symbol: 'TV18BRDCST', name: 'TV18BRDCST' },
    { symbol: 'TVSMOTOR', name: 'TVSMOTOR' },
    { symbol: 'UBL', name: 'UBL' },
    { symbol: 'UJJIVAN', name: 'UJJIVAN' },
    { symbol: 'ULTRACEMCO', name: 'ULTRACEMCO' },
    { symbol: 'UNIONBANK', name: 'UNIONBANK' },
    { symbol: 'UPL', name: 'UPL' },
    { symbol: 'VEDL', name: 'VEDL' },
    { symbol: 'VGUARD', name: 'VGUARD' },
    { symbol: 'VOLTAS', name: 'VOLTAS' },
    { symbol: 'WIPRO', name: 'WIPRO' },
    { symbol: 'WOCKPHARMA', name: 'WOCKPHARMA' },
    { symbol: 'YESBANK', name: 'YESBANK' },
    { symbol: 'ZEEL', name: 'ZEEL' }

  ];


  selChange(event): void {

    const seriesSymbol: SeriesSymbol = { symbol: event.value, series: DateSeries.DIALY }

    this.stockObserver.updateSeriesStock(seriesSymbol);
    console.log(seriesSymbol);


  }

  changeList(event) {
    this.foods = this.fandOSymbols;
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


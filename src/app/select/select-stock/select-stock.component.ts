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

 // from https://www.nseindia.com/content/fo/fo_underlyinglist.htm

  fandOSymbols: StockSymbol[] = [

    {symbol:'ACC', name: 'ACC' },
    {symbol:'ADANIENT', name: 'ADANIENT' },
    {symbol:'AJANTPHARM', name: 'AJANTPHARM' },
    {symbol:'AMBUJACEM', name: ' AMBUJACEM ' },
    {symbol:'APOLLOHOSP', name: 'APOLLOHOSP' },
    {symbol:'APOLLOTYRE', name: 'APOLLOTYRE' },
    {symbol:'ARVIND', name: 'ARVIND' },
    {symbol:'ADANIPOWER', name: 'ADANIPOWER' },
    {symbol:'ASHOKLEY', name: 'ASHOKLEY' },
    {symbol:'AUROPHARMA', name: 'AUROPHARMA' },
    {symbol:'BAJAJ-AUTO', name: 'BAJAJ-AUTO' },
    {symbol:'BAJFINANCE', name: 'BAJFINANCE' },
    {symbol:'BANKBARODA', name: 'BANKBARODA' },
    {symbol:'BATAINDIA', name: ' BATAINDIA ' },
    {symbol:'BEML', name: ' BEML ' },
    {symbol:'BHARATFORG', name: 'BHARATFORG' },
    {symbol:'BHEL', name: ' BHEL ' },
    {symbol:'CHOLAFIN', name: 'CHOLAFIN' },
    {symbol:'CIPLA', name: 'CIPLA' },
    {symbol:'HINDZINC', name: 'HINDZINC' },
    {symbol:'BOSCHLTD', name: 'BOSCHLTD' },
    {symbol:'BPCL', name: ' BPCL ' },
    {symbol:'CADILAHC', name: 'CADILAHC' },
    {symbol:'CANBK', name: 'CANBK' },
    {symbol:'CASTROLIND', name: 'CASTROLIND' },
    {symbol:'CEATLTD', name: 'CEATLTD' },
    {symbol:'CENTURYTEX', name: 'CENTURYTEX' },
    {symbol:'MCX', name: 'MCX' },
    {symbol:'CESC', name: ' CESC ' },
    {symbol:'CHENNPETRO', name: 'CHENNPETRO' },
    {symbol:'MRF', name: 'MRF' },
    {symbol:'CONCOR', name: 'CONCOR' },
    {symbol:'DIVISLAB', name: 'DIVISLAB' },
    {symbol:'PEL', name: 'PEL' },
    {symbol:'DLF', name: 'DLF' },
    {symbol:'DRREDDY', name: 'DRREDDY' },
    {symbol:'EICHERMOT', name: ' EICHERMOT ' },
    {symbol:'POWERGRID', name: ' POWERGRID ' },
    {symbol:'ENGINERSIN', name: 'ENGINERSIN' },
    {symbol:'EQUITAS', name: 'EQUITAS' },
    {symbol:'SRTRANSFIN', name: 'SRTRANSFIN' },
    {symbol:'FEDERALBNK', name: 'FEDERALBNK' },
    {symbol:'TATACOMM', name: 'TATACOMM' },
    {symbol:'GAIL', name: ' GAIL ' },
    {symbol:'TCS', name: 'TCS' },
    {symbol:'GODFRYPHLP', name: 'GODFRYPHLP' },
    {symbol:'TV18BRDCST', name: 'TV18BRDCST' },
    {symbol:'GRASIM', name: 'GRASIM' },
    {symbol:'GSFC', name: ' GSFC ' },
    {symbol:'HAVELLS', name: 'HAVELLS' },
    {symbol:'HDFC', name: ' HDFC ' },
    {symbol:'HDFCBANK', name: 'HDFCBANK' },
    {symbol:'HEXAWARE', name: 'HEXAWARE' },
    {symbol:'HINDALCO', name: 'HINDALCO' },
    {symbol:'ALBK', name: ' ALBK ' },
    {symbol:'HINDPETRO', name: ' HINDPETRO ' },
    {symbol:'HINDUNILVR', name: 'HINDUNILVR' },
    {symbol:'AMARAJABAT', name: 'AMARAJABAT' },
    {symbol:'IBULHSGFIN', name: 'IBULHSGFIN' },
    {symbol:'BALKRISIND', name: 'BALKRISIND' },
    {symbol:'IDBI', name: ' IDBI ' },
    {symbol:'BANKINDIA', name: ' BANKINDIA ' },
    {symbol:'BHARATFIN', name: ' BHARATFIN ' },
    {symbol:'BIOCON', name: 'BIOCON' },
    {symbol:'BRITANNIA', name: ' BRITANNIA ' },
    {symbol:'BERGEPAINT', name: 'BERGEPAINT' },
    {symbol:'HCLTECH', name: 'HCLTECH' },
    {symbol:'HEROMOTOCO', name: 'HEROMOTOCO' },
    {symbol:'ICICIBANK', name: ' ICICIBANK ' },
    {symbol:'IDEA', name: ' IDEA ' },
    {symbol:'IDFC', name: ' IDFC ' },
    {symbol:'IDFCFIRSTB', name: 'IDFCFIRSTB' },
    {symbol:'IFCI', name: ' IFCI ' },
    {symbol:'IGL', name: 'IGL' },
    {symbol:'INDIACEM', name: 'INDIACEM' },
    {symbol:'INDIGO', name: 'INDIGO' },
    {symbol:'INDUSINDBK', name: 'INDUSINDBK' },
    {symbol:'INFRATEL', name: 'INFRATEL' },
    {symbol:'ITC', name: 'ITC' },
    {symbol:'JINDALSTEL', name: 'JINDALSTEL' },
    {symbol:'JISLJALEQS', name: 'JISLJALEQS' },
    {symbol:'JSWSTEEL', name: 'JSWSTEEL' },
    {symbol:'JUBLFOOD', name: 'JUBLFOOD' },
    {symbol:'JUSTDIAL', name: 'JUSTDIAL' },
    {symbol:'KAJARIACER', name: 'KAJARIACER' },
    {symbol:'LUPIN', name: 'LUPIN' },
    {symbol:'IRB', name: 'IRB' },
    {symbol:'M&M', name: 'M&M' },
    {symbol:'L&TFH', name: 'L&TFH' },
    {symbol:'M&MFIN', name: 'M&MFIN' },
    {symbol:'MARICO', name: 'MARICO' },
    {symbol:'MARUTI', name: 'MARUTI' },
    {symbol:'MCDOWELL-N', name: 'MCDOWELL-N' },
    {symbol:'NATIONALUM', name: 'NATIONALUM' },
    {symbol:'MGL', name: 'MGL' },
    {symbol:'ORIENTBANK', name: 'ORIENTBANK' },
    {symbol:'MOTHERSUMI', name: 'MOTHERSUMI' },
    {symbol:'PNB', name: 'PNB' },
    {symbol:'MUTHOOTFIN', name: 'MUTHOOTFIN' },
    {symbol:'PVR', name: 'PVR' },
    {symbol:'NBCC', name: ' NBCC ' },
    {symbol:'NESTLEIND', name: ' NESTLEIND ' },
    {symbol:'NIITTECH', name: 'NIITTECH' },
    {symbol:'NMDC', name: ' NMDC ' },
    {symbol:'OFSS', name: ' OFSS ' },
    {symbol:'RELINFRA', name: 'RELINFRA' },
    {symbol:'ONGC', name: ' ONGC ' },
    {symbol:'SYNDIBANK', name: ' SYNDIBANK ' },
    {symbol:'PAGEIND', name: 'PAGEIND' },
    {symbol:'TATASTEEL', name: ' TATASTEEL ' },
    {symbol:'PETRONET', name: 'PETRONET' },
    {symbol:'TECHM', name: 'TECHM' },
    {symbol:'TITAN', name: 'TITAN' },
    {symbol:'PFC', name: 'PFC' },
    {symbol:'PIDILITIND', name: 'PIDILITIND' },
    {symbol:'RAMCOCEM', name: 'RAMCOCEM' },
    {symbol:'RAYMOND', name: 'RAYMOND' },
    {symbol:'UNIONBANK', name: ' UNIONBANK ' },
    {symbol:'VEDL', name: ' VEDL ' },
    {symbol:'VOLTAS', name: 'VOLTAS' },
    {symbol:'WIPRO', name: 'WIPRO' },
    {symbol:'RECLTD', name: 'RECLTD' },
    {symbol:'REPCOHOME', name: ' REPCOHOME ' },
    {symbol:'SAIL', name: ' SAIL ' },
    {symbol:'WOCKPHARMA', name: 'WOCKPHARMA' },
    {symbol:'SHREECEM', name: 'SHREECEM' },
    {symbol:'SIEMENS', name: 'SIEMENS' },
    {symbol:'YESBANK', name: 'YESBANK' },
    {symbol:'SRF', name: 'SRF' },
    {symbol:'SUNTV', name: 'SUNTV' },
    {symbol:'TATAGLOBAL', name: 'TATAGLOBAL' },
    {symbol:'TATAMOTORS', name: 'TATAMOTORS' },
    {symbol:'TATAPOWER', name: ' TATAPOWER ' },
    {symbol:'TORNTPOWER', name: 'TORNTPOWER' },
    {symbol:'UBL', name: 'UBL' },
    {symbol:'UJJIVAN', name: 'UJJIVAN' },
    {symbol:'ULTRACEMCO', name: 'ULTRACEMCO' },
    {symbol:'UPL', name: 'UPL' },
    {symbol:'ADANIPORTS', name: 'ADANIPORTS' },
    {symbol:'CANFINHOME', name: 'CANFINHOME' },
    {symbol:'AXISBANK', name: 'AXISBANK' },
    {symbol:'BAJAJFINSV', name: 'BAJAJFINSV' },
    {symbol:'BEL', name: 'BEL' },
    {symbol:'BHARTIARTL', name: 'BHARTIARTL' },
    {symbol:'BSOFT', name: 'BSOFT' },
    {symbol:'CGPOWER', name: 'CGPOWER' },
    {symbol:'DABUR', name: 'DABUR' },
    {symbol:'ESCORTS', name: 'ESCORTS' },
    {symbol:'EXIDEIND', name: 'EXIDEIND' },
    {symbol:'GODREJCP', name: 'GODREJCP' },
    {symbol:'DHFL', name: ' DHFL ' },
    {symbol:'ICICIPRULI', name: 'ICICIPRULI' },
    {symbol:'JETAIRWAYS', name: 'JETAIRWAYS' },
    {symbol:'INFY', name: ' INFY ' },
    {symbol:'IOC', name: 'IOC' },
    {symbol:'KOTAKBANK', name: ' KOTAKBANK ' },
    {symbol:'KTKBANK', name: 'KTKBANK' },
    {symbol:'NCC', name: 'NCC' },
    {symbol:'LICHSGFIN', name: ' LICHSGFIN ' },
    {symbol:'LT', name: 'LT' },
    {symbol:'TATAELXSI', name: ' TATAELXSI ' },
    {symbol:'OIL', name: 'OIL' },
    {symbol:'VGUARD', name: 'VGUARD' },
    {symbol:'RELCAPITAL', name: 'RELCAPITAL' },
    {symbol:'RELIANCE', name: 'RELIANCE' },
    {symbol:'SBIN', name: ' SBIN ' },
    {symbol:'COLPAL', name: 'COLPAL' },
    {symbol:'STAR', name: ' STAR ' },
    {symbol:'TATACHEM', name: 'TATACHEM' },
    {symbol:'TATAMTRDVR', name: 'TATAMTRDVR' },
    {symbol:'TORNTPHARM', name: 'TORNTPHARM' },
    {symbol:'ASIANPAINT', name: 'ASIANPAINT' },
    {symbol:'TVSMOTOR', name: 'TVSMOTOR' },
    {symbol:'MRPL', name: ' MRPL ' },
    {symbol:'NHPC', name: ' NHPC ' },
    {symbol:'SOUTHBANK', name: ' SOUTHBANK ' },
    {symbol:'GLENMARK', name: 'GLENMARK' },
    {symbol:'GMRINFRA', name: 'GMRINFRA' },
    {symbol:'KSCL', name: ' KSCL ' },
    {symbol:'INFIBEAM', name: 'INFIBEAM' },
    {symbol:'MANAPPURAM', name: 'MANAPPURAM' },
    {symbol:'PCJEWELLER', name: 'PCJEWELLER' },
    {symbol:'ZEEL', name: ' ZEEL ' },
    {symbol:'SUNPHARMA', name: ' SUNPHARMA ' },
    {symbol:'DISHTV', name: 'DISHTV' },
    {symbol:'GODREJIND', name: ' GODREJIND ' },
    {symbol:'INDIANB', name: 'INDIANB' },
    {symbol:'MFSL', name: ' MFSL ' },
    {symbol:'CUMMINSIND', name: 'CUMMINSIND' },
    {symbol:'DCBBANK', name: 'DCBBANK' },
    {symbol:'RBLBANK', name: 'RBLBANK' },
    {symbol:'MINDTREE', name: 'MINDTREE' },
    {symbol:'COALINDIA', name: ' COALINDIA ' },
    {symbol:'NTPC', name: ' NTPC ' },
    {symbol:'RPOWER', name: 'RPOWER' },
    {symbol:'SUZLON', name: 'SUZLON' },
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


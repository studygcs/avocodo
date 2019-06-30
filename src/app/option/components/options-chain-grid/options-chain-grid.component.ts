import { Component, OnInit } from '@angular/core';
import { OptionsChainService } from './../../service/options-chain.service';

@Component({
  selector: 'csapp-options-chain-grid',
  templateUrl: './options-chain-grid.component.html',
  styleUrls: ['./options-chain-grid.component.scss']
})
export class OptionsChainGridComponent implements OnInit {

  constructor(private readonly optionsChainService: OptionsChainService) { }

  columnDefs = [
    { headerName: 'OI', field: 'callOI' },
    { headerName: 'C in OI', field: 'callChangeInOI' },
    { headerName: 'Volume', field: 'callVolume' },
    { headerName: 'IV', field: 'callIV' },
    { headerName: 'LTP', field: 'callLTP' },
    { headerName: 'Net C', field: 'callNetChng' },
    { headerName: 'Bid Qty', field: 'callBidQty' },
    { headerName: 'Bid Price', field: 'callBidPrice' },
    { headerName: 'Ask Price', field: 'callAskPrice' },
    { headerName: 'Ask Qty', field: 'callAskQty' },
    { headerName: 'Strike Price', field: 'strikePrice' },
    { headerName: 'Bid Qty', field: 'putBidQty' },
    { headerName: 'Bid Price', field: 'putBidPrice' },
    { headerName: 'Ask Price', field: 'putAskPrice' },
    { headerName: 'Ask Qty', field: 'putAskQty' },
    { headerName: 'Net C', field: 'putNetChng' },
    { headerName: 'LTP', field: 'putLTP' },
    { headerName: 'IV', field: 'putIV' },
    { headerName: 'Volume', field: 'putVolume' },
    { headerName: 'C in OI', field: 'putChangeInOI' },
    { headerName: 'OI', field: 'putOI' },
  ];

  rowData: any;

  ngOnInit() {
    this.rowData = this.optionsChainService.getOptionChain();
  }

}

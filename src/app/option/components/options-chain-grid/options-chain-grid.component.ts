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
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  ngOnInit() {
    let optionchain = this.optionsChainService.getOptionChain();
  }

}

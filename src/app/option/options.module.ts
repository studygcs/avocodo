import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsRoutingModule } from './options-routing.module';
import { OptionsChainGridComponent } from './components/options-chain-grid/options-chain-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [OptionsChainGridComponent],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class OptionsModule { }

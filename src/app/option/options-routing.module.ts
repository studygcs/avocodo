import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsChainGridComponent } from './components/options-chain-grid/options-chain-grid.component';

const routes: Routes = [
  { path: 'liveOptionChain', component: OptionsChainGridComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BetaCalGridComponent } from './beta-cal-grid/beta-cal-grid.component';

import { HttpClientModule } from '@angular/common/http';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { SelectStockComponent } from './select/select-stock/select-stock.component';
import { StockObserverService } from './services/stock-observer.service';
import { DashboardComponent } from './lib/gen/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NseService } from './services/nse.service';

import {JsonpModule, Jsonp, Response} from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    JsonpModule
    
  ],
  declarations: [AppComponent, HelloComponent, BetaCalGridComponent, SelectStockComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [StockObserverService, NseService]
})
export class AppModule { }

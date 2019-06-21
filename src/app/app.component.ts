import { Component } from '@angular/core';
import { NseDataService } from './lib/service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to My World';

  constructor(private nseSer : NseDataService) {}

  getData() : void {


}


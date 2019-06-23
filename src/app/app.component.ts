import { Component } from '@angular/core';
import { NseDataService } from './lib/service';
import { NeDBService } from './db/nedb.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to My World';

  constructor(private nseSer: NseDataService,
    private readonly nedb: NeDBService) {

  }

  getData(): void {
    try {
      

    let db = this.nedb.getDatabase('yesbank');
  } catch (error) {
      console.log(error);
  }
  }
}


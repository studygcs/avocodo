import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public prSundarBlog(): void {
    this.openWindow("http://prsundar.blogspot.com/");
  }

  myBlogPosting(): void {
    this.openWindow("https://www.blogger.com/blogger.g?blogID=3974969294568783948#allposts");
  }
  public myBlog(): void {
    this.openWindow("https://worldgcs.blogspot.com/");
  }

  public nseTopGainLose(): void {
    this.openWindow('https://www.nseindia.com/live_market/dynaContent/live_analysis/top_gainers_losers.htm');
  }

  public sample(): void {
    this.openWindow('');
  }

  public nseHistoryPrices(): void {
    this.openWindow('https://www.nseindia.com/products/content/equities/equities/eq_security.htm');
  }

  
  public nseEquities(): void {
    this.openWindow('https://www.nseindia.com/products/content/equities/equities/equities.htm');
  }

  public nseIndexHistoryPrices(): void {
    this.openWindow('https://www.nseindia.com/products/content/equities/indices/historical_index_data.htm');
  }

  openWindow(url: string): void {
    window.open(url, "_blank");
  }

}
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
  myBlog(): void {
    this.openWindow("https://worldgcs.blogspot.com/");
  }

  openWindow(url: string): void {
    window.open(url, "_blank");
  }

}
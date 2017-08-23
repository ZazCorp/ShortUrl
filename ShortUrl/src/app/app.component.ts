import { Component, OnInit } from '@angular/core';
import { Url } from "./classes/Url";
import { UrlService } from "./classes/UrlService";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UrlService]
})

export class AppComponent implements OnInit {

  constructor(private urlSrv: UrlService) { }
  urls: Url[] = [];
  ngOnInit() {
    this.refresh();
  }
 

  onClick(url) {
    this.urlSrv.clickUrl(url);
  };

  refresh() {
    
    this.urlSrv.getUrls().subscribe((resp) => {
      this.urls = resp.json();
    });
  }


}


import { Component, OnInit } from '@angular/core';
import { Url } from "../../models/Url";
import { UrlService } from "../../services/UrlService";





@Component({
 
  selector: 'app-root',
  templateUrl: './urllist.component.html',
  
  providers: [UrlService]
})

export class UrlListComponent implements OnInit {

  constructor(private urlSrv: UrlService) { }
  urls: Url[] = [];
  ngOnInit() {
    this.refresh();
  }
 

  onClick(url:Url) {
    this.urlSrv.clickUrl(url);
  };

  refresh() {
    
    this.urlSrv.getUrls().subscribe((resp) => {
      this.urls = resp.json();
    });
  }


}


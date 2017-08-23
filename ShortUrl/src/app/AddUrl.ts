import { Component } from '@angular/core';
import { Url } from "./classes/Url";
import { UrlService } from "./classes/UrlService";
import {AppComponent} from './app.component';

@Component({
  selector: 'addurl',
  templateUrl: './AddUrl.html',
  providers:[UrlService,AppComponent]
  //styleUrls: ['./app.component.css']
})

export class AddUrl {
  constructor(private urlSrv: UrlService , private app: AppComponent) { }
  url: Url = new Url();

  onClick(url) {
     this.urlSrv.createUrl(url);
  };
}

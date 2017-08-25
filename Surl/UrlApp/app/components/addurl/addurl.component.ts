import { Component } from '@angular/core';
import { Url } from "../../models/Url";
import { UrlService } from "../../services/UrlService";


@Component({
  selector: 'addurl',
  templateUrl: './addurl.component.html',
  providers:[UrlService]
})

export class AddUrl {
  constructor(private urlSrv: UrlService) { }
  url: Url = new Url();

  onClick(url) {
     this.urlSrv.createUrl(url);
  };
}

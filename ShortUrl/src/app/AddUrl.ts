import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Url } from "./classes/Url";


@Component({
  selector: 'addurl',
  templateUrl: './AddUrl.html'
  //styleUrls: ['./app.component.css']
})

export class AddUrl {
  constructor(private httpService: Http) { }
  url: Url = new Url;

  onClick(url) {
    const body = JSON.stringify(url);
    console.log(url);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    //this.httpService.post('api/url', body, headers).subscribe((data) => this.url.shortUrl = data.toString());
    this.httpService
      .post('api/url', body, { headers:headers})
      .subscribe((res) => this.url.shortUrl );
    //.map(this.extractData)
    //.catch(this.handleErrorObservable);
    //.map((resp: Response) => resp.json())
    //.catch((error: any) => { return Observable.throw(error); });


  };
}


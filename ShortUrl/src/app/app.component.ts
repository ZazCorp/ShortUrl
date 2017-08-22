import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Url } from "./classes/Url";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private httpService: Http) { }
    urls: Url[] = [];
    ngOnInit() {
      this.httpService.get('/api/url').subscribe(urls => {
          console.log(urls);
            this.urls = urls.json();
        });
    }
}

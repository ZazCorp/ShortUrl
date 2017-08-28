
import { Url } from '../models/Url';
import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';

@Injectable()



export class UrlService   {
  private url = 'api/url';

  constructor(private http: Http, private cookieService: CookieService) { }

  putcoockie() {
    let id = this.cookieService.get(this.str);
    console.log(id);
    if (id == null || id === "") {
      id = this.generateShortUrl(10);
      this.cookieService.put(this.str, id);
    }
    this.userId = id;
    console.log(this.userId);
  }

  private userId: string = "";
  private str: string = "keyZaz";

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

  //все ссылки
  getUrls() {
    this.putcoockie();
    let params = new URLSearchParams();
    params.set('isUser', this.userId);
    return this.http.get(this.url,{search:params});
  }

  //переход по ссылке
  clickUrl(url: Url) {
    url.count += 1;
    this.updateUrl(url);
  }

  private generateShortUrl(length: number) {
    let str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let base62Chars = Array.from(str);

    var result = '';

    var i;
    for (i = 0; i < length; i++) {
      const ind = this.getRandomInt(0, 61);
      result += base62Chars[ind];
    }

    return result;
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createUrl(url: Url) {
    this.putcoockie();
    let id = this.generateShortUrl(5);
    let location = window.location;
    let sUrl = location.protocol+"//"+location.host+"/" + this.url + "/" + id;
    url.idUrl = id;
    url.shortUrl = sUrl;
    url.dateCreate = new Date();
    url.idUser = this.userId;

    const body = JSON.stringify(url);
    
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    this.http.post(this.url, body, { headers: headers }).subscribe();
  }

  updateUrl(url: Url) {
    const body = JSON.stringify(url);
    console.log(url);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    this.http.put(this.url, body, { headers: headers }).subscribe();
  }


}


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
var UrlService = (function () {
    function UrlService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.url = 'api/url';
        this.userId = "";
        this.str = "keyZaz";
    }
    UrlService.prototype.putcoockie = function () {
        var id = this.cookieService.get(this.str);
        console.log(id);
        if (id == null || id === "") {
            id = this.generateShortUrl(10);
            this.cookieService.put(this.str, id);
        }
        this.userId = id;
        console.log(this.userId);
    };
    UrlService.prototype.getCookie = function (key) {
        return this.cookieService.get(key);
    };
    UrlService.prototype.getUrls = function () {
        this.putcoockie();
        var params = new URLSearchParams();
        params.set('isUser', this.userId);
        return this.http.get(this.url, { search: params });
    };
    UrlService.prototype.clickUrl = function (url) {
        url.count += 1;
        this.updateUrl(url);
    };
    UrlService.prototype.generateShortUrl = function (length) {
        var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var base62Chars = Array.from(str);
        var result = '';
        var i = 0;
        for (i = 0; i < length; i++) {
            var ind = this.getRandomInt(0, 61);
            result += base62Chars[ind];
        }
        return result;
    };
    UrlService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    UrlService.prototype.createUrl = function (url) {
        this.putcoockie();
        var id = this.generateShortUrl(5);
        var location = window.location;
        var sUrl = location.protocol + "//" + location.host + "/" + this.url + "/" + id;
        url.idUrl = id;
        url.shortUrl = sUrl;
        url.dateCreate = new Date();
        url.idUser = this.userId;
        var body = JSON.stringify(url);
        var headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.http.post(this.url, body, { headers: headers }).subscribe();
    };
    UrlService.prototype.updateUrl = function (url) {
        var body = JSON.stringify(url);
        console.log(url);
        var headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.http.put(this.url, body, { headers: headers }).subscribe();
    };
    return UrlService;
}());
UrlService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, CookieService])
], UrlService);
export { UrlService };
//# sourceMappingURL=UrlService.js.map
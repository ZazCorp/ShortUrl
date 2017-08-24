"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Url_1 = require("./classes/Url");
var UrlService_1 = require("./classes/UrlService");
var app_component_1 = require("./app.component");
var AddUrl = (function () {
    function AddUrl(urlSrv, app) {
        this.urlSrv = urlSrv;
        this.app = app;
        this.url = new Url_1.Url();
    }
    AddUrl.prototype.onClick = function (url) {
        this.urlSrv.createUrl(url);
    };
    ;
    return AddUrl;
}());
AddUrl = __decorate([
    core_1.Component({
        selector: 'addurl',
        templateUrl: './AddUrl.html',
        providers: [UrlService_1.UrlService, app_component_1.AppComponent]
        //styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [UrlService_1.UrlService, app_component_1.AppComponent])
], AddUrl);
exports.AddUrl = AddUrl;
//# sourceMappingURL=AddUrl.js.map
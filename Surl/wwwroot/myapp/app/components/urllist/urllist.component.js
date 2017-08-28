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
var UrlService_1 = require("../../services/UrlService");
var UrlListComponent = (function () {
    function UrlListComponent(urlSrv) {
        this.urlSrv = urlSrv;
        this.urls = [];
    }
    UrlListComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    UrlListComponent.prototype.onClick = function (url) {
        this.urlSrv.clickUrl(url);
    };
    ;
    UrlListComponent.prototype.refresh = function () {
        var _this = this;
        this.urlSrv.getUrls().subscribe(function (resp) {
            _this.urls = resp.json();
        });
    };
    return UrlListComponent;
}());
UrlListComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './urllist.component.html',
        providers: [UrlService_1.UrlService]
    }),
    __metadata("design:paramtypes", [UrlService_1.UrlService])
], UrlListComponent);
exports.UrlListComponent = UrlListComponent;
//# sourceMappingURL=urllist.component.js.map
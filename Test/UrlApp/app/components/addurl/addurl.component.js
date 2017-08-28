var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Url } from "../../models/Url";
import { UrlService } from "../../services/UrlService";
var AddUrlComponent = (function () {
    function AddUrlComponent(urlSrv) {
        this.urlSrv = urlSrv;
        this.url = new Url();
    }
    AddUrlComponent.prototype.onClick = function (url) {
        this.urlSrv.createUrl(url);
    };
    ;
    return AddUrlComponent;
}());
AddUrlComponent = __decorate([
    Component({
        selector: 'addurl',
        templateUrl: './addurl.component.html',
        providers: [UrlService]
    }),
    __metadata("design:paramtypes", [UrlService])
], AddUrlComponent);
export { AddUrlComponent };
//# sourceMappingURL=addurl.component.js.map
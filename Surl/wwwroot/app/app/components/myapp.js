"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MainAppComponent = (function () {
    function MainAppComponent() {
    }
    return MainAppComponent;
}());
MainAppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div>\n \n<ul class=\"nav nav-tabs\">\n  <li><a routerLink=\"/add\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443</a></li>\n  <li><a routerLink=\"/app\">\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0438</a></li>\n\n</ul>\n  <router-outlet>\n\n</router-outlet>\n</div>"
    })
], MainAppComponent);
exports.MainAppComponent = MainAppComponent;
//# sourceMappingURL=myapp.js.map
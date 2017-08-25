"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var addurl_component_1 = require("./app/components/addurl/addurl.component");
var urllist_component_1 = require("./app/components/urllist/urllist.component");
var myapp_1 = require("./app/components/myapp");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var routes_1 = require("./routes");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            urllist_component_1.UrlListComponent,
            addurl_component_1.AddUrlComponent,
            myapp_1.MainAppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routes_1.routes)
        ],
        exports: [router_1.RouterModule],
        providers: [cookies_service_1.CookieService],
        bootstrap: [urllist_component_1.UrlListComponent, addurl_component_1.AddUrlComponent, myapp_1.MainAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
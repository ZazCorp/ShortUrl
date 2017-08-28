var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { AddUrlComponent } from './app/components/addurl/addurl.component';
import { UrlListComponent } from './app/components/urllist/urllist.component';
import { MainAppComponent } from './app/components/myapp.js';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CookieService } from 'angular2-cookie/services/cookies.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            UrlListComponent,
            AddUrlComponent,
            MainAppComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule],
        providers: [CookieService],
        bootstrap: [UrlListComponent, AddUrlComponent, MainAppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
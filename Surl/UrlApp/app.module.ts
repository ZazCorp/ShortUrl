import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AddUrlComponent } from './app/components/addurl/addurl.component';
import { UrlListComponent } from './app/components/urllist/urllist.component';
import { MainAppComponent } from './app/components/myapp'


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { routes } from './routes';

import { CookieService } from 'angular2-cookie/services/cookies.service';


@NgModule({
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
export class AppModule {
  
}

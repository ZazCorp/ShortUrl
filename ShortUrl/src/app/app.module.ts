import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddUrl } from './AddUrl';
import { MainAppComponent } from './mainApp'


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { CookieService } from '../../node_modules/angular2-cookie/services/cookies.service';

// определение маршрутов
const appRoutes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'add', component: AddUrl },
];

@NgModule({
  declarations: [
    AppComponent,
    AddUrl,
    MainAppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [CookieService],
  bootstrap: [AppComponent, AddUrl, MainAppComponent]
})
export class AppModule {
  
}

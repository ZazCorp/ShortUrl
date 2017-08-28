import { Routes, RouterModule } from '@angular/router';
import { AddUrlComponent } from './app/components/addurl/addurl.component.js';
import { UrlListComponent } from './app/components/urllist/urllist.component.js';

export const routes: Routes = [
  { path: 'urllist', component: UrlListComponent },
  { path: 'addurl', component: AddUrlComponent },
];
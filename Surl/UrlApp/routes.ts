import { Routes, RouterModule } from '@angular/router';
import { AddUrlComponent } from './app/components/addurl/addurl.component';
import { UrlListComponent } from './app/components/urllist/urllist.component';

export const routes: Routes = [
  { path: 'urllist', component: UrlListComponent },
  { path: 'addurl', component: AddUrlComponent },
];
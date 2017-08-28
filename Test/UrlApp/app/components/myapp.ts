import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
 
<ul class="nav nav-tabs">
  <li><a routerLink="/addurl">Создать ссылку</a></li>
  <li><a routerLink="/urllist">Просмотреть ссылки</a></li>

</ul>
  <router-outlet>

</router-outlet>
</div>`
})
export class MainAppComponent { }

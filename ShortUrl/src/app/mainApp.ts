import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
 
<ul class="nav nav-tabs">
  <li><a routerLink="/add">Создать ссылку</a></li>
  <li><a routerLink="/app">Просмотреть ссылки</a></li>

</ul>
  <router-outlet>

</router-outlet>
</div>`
})
export class MainAppComponent { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RESTService} from './services/REST.service';
import {HttpRepo} from './repositories/httpRepo';
import {TodoListRepository} from './repositories/todoListRepository';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {SignButtonComponent} from './sign-button/sign-button.component';
import {AuthService} from './services/auth.service';
import {UserListComponent} from './main/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {path: 'list', component: UserListComponent},
      {path: '**', redirectTo: '/list'}
    ])
  ],
  providers: [{provide: RESTService, useValue: `http://${location.hostname}:3500/`}, HttpRepo, TodoListRepository, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

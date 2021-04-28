import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AdminListComponent} from './admin-list/admin-list.component';
import {AuthGuard} from './authGuard';
import {AuthModel} from './models/auth.model';
import {FormsModule} from '@angular/forms';
import {MainModule} from '../main/main.module';

@NgModule({
  declarations: [AuthComponent, AdminListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'auth', component: AuthComponent},
      {path: 'main', component: AdminListComponent, canActivate: [AuthGuard]},
      {path: '**', redirectTo: 'auth'}
    ]),
    FormsModule,
    MainModule
  ],
  providers: [AuthGuard, AuthModel],
})
export class AdminModule {
}

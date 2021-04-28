import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {ListComponent} from '../list/list.component';
import {SplashScreenComponent} from '../splash-screen/splash-screen.component';

@NgModule({
  declarations: [UserListComponent, ListComponent, SplashScreenComponent],
  exports: [
    ListComponent,
    SplashScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule {
}

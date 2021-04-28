import {Injectable} from '@angular/core';
import {AuthModel} from '../admin/models/auth.model';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthService {
  private authenticated;

  constructor() {
    console.log('service constructor');
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  auth(): Observable<boolean> {
    setTimeout(() => {
      this.authenticated = true;
    }, 2000);

    return of(this.authenticated);
  }

  logOut(): void {
    this.authenticated = false;

    console.log('logout: ', this.isAuthenticated());
  }
}

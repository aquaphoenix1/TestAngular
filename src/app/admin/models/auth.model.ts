import {Injectable} from '@angular/core';

@Injectable()
export class AuthModel {
  public login: string;
  public password: string;

  constructor() {
  }

  clear(): void {
    this.login = '';
    this.password = '';
  }
}

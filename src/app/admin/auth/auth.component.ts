import {Component, OnInit} from '@angular/core';
import {AuthModel} from '../models/auth.model';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authPending: Pending<boolean>;

  constructor(public authModel: AuthModel, private router: Router, private authService: AuthService) {
  }

  get status(): typeof Status {
    return Status;
  }

  ngOnInit(): void {
    this.authModel.clear();
  }

  cancel(): void {
    this.router.navigateByUrl('/');
  }

  auth(authModel: AuthModel): void {
    console.log('auth: ', authModel);
    const s = new BehaviorSubject<Status>(Status.LOADING);

    const obs = this.authService.auth().pipe(
      retry(2),
      catchError(error => {
        s.next(Status.ERROR);
        throw new Error(error);
      }),
      tap((value) => {
        console.log('tap');
        s.next(Status.DONE);
      })
    );

    this.authPending = {data: obs, status: s};

    /*this.authPending.status.subscribe((status: Status) => {
      if (status === Status.DONE) {
        this.router.navigateByUrl('/admin/main').then(r => console.log(r));
      } else {
        // todo show error message
      }
    });*/
  }
}

export enum Status {
  LOADING,
  DONE,
  ERROR
}

export interface Pending<T> {
  data: Observable<T>;
  status: Observable<Status>;
}

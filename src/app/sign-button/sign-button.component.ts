import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-button',
  templateUrl: './sign-button.component.html',
  styleUrls: ['./sign-button.component.css']
})
export class SignButtonComponent implements OnInit, OnChanges, DoCheck {

  constructor(public authService: AuthService, private router: Router) {
  }

  ngDoCheck(): void {
    console.log('sign doCheck');
  }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/main');
  }

  signIn(): void {
    this.router.navigateByUrl('/admin/auth');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('sign changes: ', changes);
  }
}

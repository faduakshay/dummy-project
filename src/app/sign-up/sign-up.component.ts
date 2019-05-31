import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from './user';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: Signup = new Signup();
  public confirmPassword;
  public passMisMatch: boolean;
  @ViewChild('signUpForm') form: any;
  constructor(public authService: AuthenticationService) { }

  sign(): void {
     if (this.form.valid) {
    if (this.model.password === this.confirmPassword) {
      console.log('sign up form submitted');
    }
  } else {
      this.passMisMatch = true;
      console.log('in signup else');
    }

  }
  ngOnInit() {
    console.log(this.form);
  }

}

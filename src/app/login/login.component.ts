import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 private userName: string;
 private password: string;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}

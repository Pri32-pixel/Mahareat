import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedIn = false;
  email: string = '';
  password: string = '';
  captchaResponse: string = '';

  constructor(private authService:AuthService) {}
  
  
  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) this.isSignedIn = true;
    else this.isSignedIn = false;
  }
  onSignin(email: string, password: string): void {
    if (email == "abc" && password == "123") {
      this.isSignedIn = true;
    }
  }
  handleLogout() {
    this.isSignedIn = false;
  }
  forgotPassword() {

    console.log('Forgot Password clicked!');
  }
}
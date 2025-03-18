import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  message: string = 'Please enter username and password';
  messageClass: string = 'alert alert-info';
  apiResponse: any;

  constructor(public authService: AuthService, private router: Router) { }

  login() {
    //create user object
    let user = {
      username: this.username,
      password: this.password
    };

    return this.authService.login(user).subscribe({
      next: response => {
        this.apiResponse = response;
        if (this.apiResponse.token) {
          if (this.username) {
            this.authService.setUsername(this.username);
          }
          this.router.navigate(['/habits']);
        }
      },
      error: err => {
        this.message = 'Invalid username or password';
        this.messageClass = 'alert alert-danger';
      }
    })
  }
}
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  message: string = 'Please Complete all field with a strong password';
  messageClass: string = 'alert alert-info';
  apiResponse: any;

  constructor(public authService: AuthService) { }

  register() {
    //compare password
    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match';
      this.messageClass = 'alert alert-danger';
      return;
    }

    //create user
    let user = {
      username: this.username,
      password: this.password
    };

    //pass to service to make API call
    return this.authService.register(user).subscribe({
      next: response => {
        this.apiResponse = response;
        if (this.apiResponse.username) {
          this.message = 'Registration successful';
          this.messageClass = 'alert alert-success';
        }
      },
      error: err => {
        this.message = err.message;
        this.messageClass = 'alert alert-danger';
      }
    })
  }
}


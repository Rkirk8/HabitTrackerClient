import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //get server API env var to prevent hardcoding
  serverUrl: string = environment.serverUrl;

  //global username var available to all components
  private usernameSource = new BehaviorSubject<string | null>(null);
  username = this.usernameSource.asObservable();

  setUsername(username: string) {
    //set global username after successful login
    this.usernameSource.next(username);
  }

  clearUsername(): void {
    this.usernameSource.next(null);
  }
  constructor(private http: HttpClient) { }

  register(user: any) {
    //call server api to ty and register user
    return this.http.post(`${this.serverUrl}/users/register`, user);
  }

  login(user: any) {
    //call server api to ty and register user
    return this.http.post(`${this.serverUrl}/users/login`, user, { withCredentials: true });
  }

  logout() {
    //call server api to ty and register user
    return this.http.get(`${this.serverUrl}/users/logout`, { withCredentials: true });
  }
}

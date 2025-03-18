import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //get server API env var to prevent hardcoding
  serverUrl: string = environment.serverUrl

  constructor(private http: HttpClient) { }

  register(user: any) {
    //call server api to ty and register user
    return this.http.post(`${this.serverUrl}/users/register`, user);
  }
}

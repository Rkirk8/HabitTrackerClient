import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  // when service instance created, also create http client instance to make API calls
  constructor(private http: HttpClient) { }

  // server API domain used for all calls
  serverUrl: string = environment.serverUrl;

  // GET: all
  getHabits(keyword: string | undefined) {
    return this.http.get(`${this.serverUrl}/habits`);
  }

  // // GET: one
  // getHabit(_id: string) {
  //   return this.http.get(`${this.serverUrl}/habits/${_id}`);
  // }

  // POST: add new object
  addHabit(habit: any) {
    return this.http.post(`${this.serverUrl}/habits`, habit);
  }

  // DELETE
  deleteHabit(_id: string) {
    return this.http.delete(`${this.serverUrl}/habits/${_id}`)
  }

  // UPDATE
  updateHabit(habit: any) {
    return this.http.put(`${this.serverUrl}/habits/${habit._id}`, habit)
  }

}
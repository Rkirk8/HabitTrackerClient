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
  getHabits() {
    return this.http.get(`${this.serverUrl}/habits`);
  }

  //search
  searchHabits(habitSearch: string) {
    return this.http.get(`${this.serverUrl}/habits/search/${keyword}`);
  }

  //GET: one
  //getHabit(_id: string) {
  //return this.http.get(`${this.serverUrl}/habits/${_id}`);
  //}

  // POST: add new object
  addHabit(habit: any) {
    return this.http.post(`${this.serverUrl}/habits`, habit);
  }

  // Delete 
  deleteHabit(_id: string) {
    return this.http.delete(`${this.serverUrl}/habits/${_id}`);
  }

  // updateHabit
  updateHabit(habit: any) {
    return this.http.put(`${this.serverUrl}/habits/${habit._id}`, habit);
  }

}

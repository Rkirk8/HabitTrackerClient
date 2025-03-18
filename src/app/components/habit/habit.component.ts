import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HabitService } from '../../services/habit.service';
import { FormsModule } from '@angular/forms';

export class Habit {
  _id: string | undefined;
  name: string | undefined;
  category: string | undefined;
  description: string | undefined;
};

@Component({
  selector: 'app-habit',
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.css'
})
export class HabitComponent implements OnInit {
  // mock data in-memory
  // HABITS: Habit[] = [
  //   { _id: 'abc123', name: 'Teach Lesson', category: 'School', description: 'Fun!' },
  //   { _id: 'def456', name: 'Recycling', category: 'Home', description: 'Tuesdays' },
  //   { _id: 'ghi890', name: 'Workout', category: 'Health', description: 'To stay fit' }
  // ]

  constructor (private habitService: HabitService) { }

  HABITS: any;
  _id: string | undefined;
  name: string | undefined;
  category: string | undefined;
  description: string | undefined;

  getHabits(): void {
    this.habitService.getHabits().subscribe(response => {
      this.HABITS = response;
    })
  }

  addHabit(): void {
    // create new Habit object in JSON from form properties
    let newHabit = {
      name: this.name,
      category: this.category,
      description: this.description
    };

    // call service & pass new json obj
    this.habitService.addHabit(newHabit).subscribe(response => {
      // refresh list
      this.getHabits();

      // clear form values
      this.clearForm();
    });
  }

  clearForm(): void {
    this._id = undefined;
    this.name = undefined;
    this.category = undefined;
    this.description = undefined;
  }

  selectHabit(habit: Habit): void {
    this._id = habit._id;
    this.name = habit.name;
    this.description = habit.description;
    this.category = habit.category;
  }

  deleteHabit(_id: string): void {
    if (confirm('Are you sure you want to delete this habit?')) {
      this.habitService.deleteHabit(_id).subscribe(response => {
        this.getHabits();
        this.clearForm();
      });
    }      
  }

  updateHabit(): void {
    let habit = {
      _id: this._id,
      name: this.name,
      category: this.category,
      description: this.description
    };

    this.habitService.updateHabit(habit).subscribe(response => {
      this.getHabits();
      this.clearForm();
    });
  }

  ngOnInit(): void {
    this.getHabits();
  }
}
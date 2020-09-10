import { Habit } from "./habit";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HabitService {
  constructor() {}

  habits: Habit[] = [
    {
      id: 1,
      title: "Check in with parents once a week",
      count: 5,
    },
    {
      id: 2,
      title: "Record 2 videos per day",
      count: 4,
    },
    {
      id: 3,
      title: "Work on side project 5 hrs/week",
      count: 3,
    },
    {
      id: 4,
      title: "Write for 20 minutes a day",
      count: 6,
    },
  ];

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  addHabit($event) {
    $event.id = this.habits.length + 1;
    this.habits.push($event);
  }
}

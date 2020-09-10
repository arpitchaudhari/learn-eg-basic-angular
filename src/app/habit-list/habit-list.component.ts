import { HabitService } from "./../habit.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Habit } from "../habit";

@Component({
  selector: "app-habit-list",
  templateUrl: "./habit-list.component.html",
  styleUrls: ["./habit-list.component.css"],
})
export class HabitListComponent implements OnInit {
  constructor(private habitService: HabitService) {}

  //Calls when compoent loads
  ngOnInit(): void {
    this.habits = this.habitService.getHabits().pipe(
      map((habits) => {
        return habits.map((habit) => {
          habit.streak = habit.count > 5 ? true : false;
          return habit;
        });
      })
    );
  }
  habitForm;
  habits: Observable<Habit[]>;

  onAddHabit($event) {
    this.habitService.addHabit($event);
  }
}

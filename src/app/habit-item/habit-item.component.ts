import { Habit } from "./../habit";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-habit-item",
  templateUrl: "./habit-item.component.html",
  styleUrls: ["./habit-item.component.css"],
})
export class HabitItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() habit: Habit;
}

import { FormBuilder } from "@angular/forms";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-habit-form",
  templateUrl: "./habit-form.component.html",
  styleUrls: ["./habit-form.component.css"],
})
export class HabitFormComponent implements OnInit {
  @Output() addHabit = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder) {
    //Group is a control for forms.
    this.habitForm = this.formBuilder.group({
      //Passing an object that contains fields which will become some form control
      title: "",
    });
  }

  ngOnInit() {}
  habitForm: any;

  onSubmit(newHabit) {
    this.addHabit.emit(newHabit);
    this.habitForm.reset();
  }
}

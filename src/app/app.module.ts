import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HabitListComponent } from "./habit-list/habit-list.component";
import { HabitItemComponent } from "./habit-item/habit-item.component";
import { HabitFormComponent } from "./habit-form/habit-form.component";
import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account.component";
import { AccountDetailComponent } from "./account-detail/account-detail.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "account",
    component: AccountComponent,
  },
  {
    path: "account/:id",
    component: AccountDetailComponent,
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitItemComponent,
    HabitFormComponent,
    HomeComponent,
    AccountComponent,
    AccountDetailComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-account-detail",
  templateUrl: "./account-detail.component.html",
  styleUrls: ["./account-detail.component.css"],
})
export class AccountDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id: number;
  ngOnInit(): void {
    //2 types - Snapshot or Observable
    //this.id = +this.route.snapshot.paramMap.get("id"); //Gets number but default is string
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get("id");
    });
  }
}

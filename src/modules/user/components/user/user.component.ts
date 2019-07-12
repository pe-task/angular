import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserInterface } from "../../../../interfaces";
import { ApiService } from "../../../core/services";
import { map } from "rxjs/operators";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: UserInterface;

  constructor(
    private _apiService: ApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    const userId: number = this._activatedRoute.snapshot.params["id"];
    this._apiService
      .fetchUserById(userId)
      .pipe(map((response: any) => response.data))
      .subscribe((user: UserInterface) => {
        this.user = user;
      });
  }

  back(): void {
    this._router.navigate(["./users"]);
  }
}

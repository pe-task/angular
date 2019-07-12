import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PageEvent } from "@angular/material";
import { map, tap } from "rxjs/operators";
import { Subscription } from "rxjs";
import { ApiService } from "src/modules/core";
import { UserInterface, HttpUserInterface } from "src/interfaces";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit, OnDestroy {
  displayedColumns = ["first_name", "last_name", "email"];
  userList: UserInterface[] = [];
  pagesCount: number;
  pagesSize: number;
  usersSubscription: Subscription;

  constructor(
    private _router: Router,
    private _apiService: ApiService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscribeToRouter();
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

  subscribeToRouter() {
    this._activatedRoute.queryParams.subscribe(data => {
      const { page = 1 } = data;
      this.getUsers({ page });
    });
  }

  pageChanged(event: PageEvent): void {
    let page: number = event.pageIndex + 1;
    this._router.navigate(["./"], { queryParams: { page } });
  }

  getUsers({ page }) {
    this.usersSubscription = this._apiService
      .fetchUsers(page)
      .pipe(
        tap((response: HttpUserInterface) => {
          this.getPaginationInfo({ ...response });
        }),
        map((response: HttpUserInterface) => response.data)
      )
      .subscribe((users: UserInterface[]) => {
        this.userList = users;
      });
  }

  getPaginationInfo({ total, total_pages }) {
    this.pagesSize = total_pages;
    this.pagesCount = total;
  }
}

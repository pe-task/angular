import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {UserInterface} from '../../../../interfaces';
import {PaginationInterface} from '../../../../interfaces/pagination.interface';
import {ApiService} from '../../../core/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email', 'operations'];
  userList: any[] = [];
  totalPages: number;
  perPage: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const page = queryParams['page'];
      this.apiService.fetchUsers(page).subscribe(data => this.fetchUserListSuccess(data));
    });
  }

  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.router.navigate(['./'], {queryParams: {page}});
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }

  private fetchUserListSuccess(paginationInfo: PaginationInterface<UserInterface>) {
    this.userList = paginationInfo.data;
    this.perPage = paginationInfo.per_page;
    this.totalPages = paginationInfo.total;
  }
}

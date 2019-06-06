import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../../core/services';

@Injectable()
export class UsersResolver implements Resolve<any> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
    const page: number = route.queryParams['page'] || 1;
    return this.apiService.fetchUsers(page);
  }

}

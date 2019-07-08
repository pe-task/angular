import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class UserDataResolver implements Resolve<any> {

    constructor(private apiService: ApiService) {}

    resolve(route: ActivatedRouteSnapshot) {
        const userId: number = route.params['id'];
        return this.apiService.fetchUserById(userId);
    }
}

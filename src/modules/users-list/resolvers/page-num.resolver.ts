import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class PageNumResolver implements Resolve<any> {
    resolve(route: ActivatedRouteSnapshot): any {
        return (route.queryParams['page'] - 1) || 0;
    }
}

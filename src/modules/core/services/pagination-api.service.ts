import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaginationApiService {

  constructor(private http: Http) {
  }

  fetchPaginationInfo(page: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users?page=${page}`).pipe(map(response => {
      return {
        total_pages: response.json().total_pages,
        per_page: response.json().per_page,
        total: response.json().total,
        page: response.json().page
      };
    }));
  }
}

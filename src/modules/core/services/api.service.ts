import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserInterface} from '../../../interfaces';
import {PaginationInterface} from '../../../interfaces/pagination.interface';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  fetchUsers(page): Observable<PaginationInterface<UserInterface>> {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(response => response.json()));
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(map(response => response.json()));
  }
}

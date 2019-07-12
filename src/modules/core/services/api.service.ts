import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserInterface, HttpUserInterface } from "src/interfaces";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private _baseUrl = "https://reqres.in/api";
  constructor(private _httpClient: HttpClient) {}

  fetchUsers(page): Observable<HttpUserInterface> {
    const path = `${this._baseUrl}/users?page=${page}`;
    return this._httpClient.get<HttpUserInterface>(path);
  }

  fetchUserById(id: number): Observable<UserInterface> {
    const path = `${this._baseUrl}/users/${id}`;
    return this._httpClient.get<UserInterface>(path);
  }
}

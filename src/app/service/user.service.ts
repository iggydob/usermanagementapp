import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interface/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

// ${this.server}/users/create
// ${this.server}/users/{email}
// ${this.server}/users/delete
// ${this.server}/users
// ${this.server}/update

export class UserService {
  private readonly server: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.server}/users`);
  }

  updateUserDetails(user: User): Observable<User> {
    return this.http.put<User>(`${this.server}/users/update`, user);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.server}/users/create`, user);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.server}/users/${email}`);
  }

  deleteUser(email: string): Observable<void> {
    return this.http.delete<void>(`${this.server}/users/delete`, { params: { email } });
  }

}

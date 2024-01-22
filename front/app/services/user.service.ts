import { Injectable } from '@angular/core';
import { User } from '../entity/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class userService  {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8086/post';
  }
  findAll(): Observable<any> {
    console.log(User)
    return this.http.get('http://localhost:8086/user');
  }

  public save(payment: User) {
    return this.http.post<User>(this.usersUrl, User);
  }}
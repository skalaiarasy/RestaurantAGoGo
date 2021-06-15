import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const dbApi = 'https://localhost:44334/api/restaurant/getuser?userId=';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(dbApi + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, /*email: string,*/ password: string): Observable<any> {
    return this.http.post(dbApi + 'register', {
      username,
      //email,
      password
    }, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const dbApi = 'https://localhost:44334/api/Restaurant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  constructor(private http: HttpClient) { }
  //https://localhost:44334/api/Restaurant/adduser?userName=jason&password=123456
  login(userName: string, password: string): Observable<any> {
    return this.http.get(dbApi + `/getuserinfo?userName=${ userName }&password=${ password }`,{
      //userName,
      //password
    },);
  }

  register(userName: string, /*email: string,*/ password: string): Observable<any> {
    console.log(userName);
    console.log(password);
    return this.http.post(dbApi + `/adduser?userName=${ userName }&password=${ password }`, {
      //userName,
      ////email,
      //password
    });
  }
}

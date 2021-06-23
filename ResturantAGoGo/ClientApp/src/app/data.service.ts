import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*const dbApi = 'https://localhost:44334/api/restaurant/getuser?userId=';*/
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getPublicContent(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/restaurant/getuser?userId=all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/restaurant/getuser?userId=user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/restaurant/getuser?userId=mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/restaurant/getuser?userId=admin', { responseType: 'text' });
  }
}

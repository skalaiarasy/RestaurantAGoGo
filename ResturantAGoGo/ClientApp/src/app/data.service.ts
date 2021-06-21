import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const dbApi = 'https://localhost:44334/api/restaurant/getuser?userId=';
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(dbApi + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(dbApi + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(dbApi + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(dbApi + 'admin', { responseType: 'text' });
  }
}

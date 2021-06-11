import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class RestaurantapiService {
  apiUrl: string = "/yelp/businesses/search?location=Troy,MI";  
  constructor(private http: HttpClient) {
  }
  //To get the restaurants details 
  getAllRestaurants(): any {
    return this.http.get(this.apiUrl);
  }
}


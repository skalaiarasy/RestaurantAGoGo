import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class RestaurantapiService {
  apiUrl: string = "/yelp/businesses/search?location=48085&sort_by=distance&limit=50&categories=restaurants";
  constructor(private http: HttpClient) {
  }
  //To get the restaurants details 
  getAllRestaurants(): any {
    return this.http.get(this.apiUrl);
  }
}


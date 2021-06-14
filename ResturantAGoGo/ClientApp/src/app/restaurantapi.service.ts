import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Restaurant } from './Restaurant';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })


export class RestaurantapiService {
  zip_code = "";
  categories = "";
    apiUrl: string = `/yelp/businesses/search?location=${this.zip_code}&sort_by=distance&limit=50&term=restaurants&radius=40000&categories=${this.categories}`;
  constructor(private http: HttpClient, public router: Router) {
  }

  restaurants: Restaurant[] = [];

  //To get the restaurants details 

  setZip(zip_code: string): any {   
    this.zip_code = zip_code;
  }

  setCategory(categories: string): any {
    this.categories = categories;
  }

  getAllRestaurants(): any {
    return this.http.get(`/yelp/businesses/search?location=${this.zip_code}&sort_by=distance&limit=50&term=restaurants&radius=40000&categories=${this.categories}`);
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RestaurantapiService {
  apiKey: string = "Bearer Bmtr7SZS4RMwjn9cC6UIKcpekqpc79fHskbIQAJ096rBentfTjyV9OKtN2BjDfEz6dC6DkHcPVlgdjg74jw3tS8JsAvqOXv5folWDnSkN0WfJe6l2DNaySVEXSTBYHYx";
  apiUrl: string = "https://api.yelp.com/v3/businesses/search?location=Troy,MI";
  constructor(private http: HttpClient ) {

  }
  //get the resturant method

  getAllRestaurants(): any {
    const header = new HttpHeaders().set('Authorization',this.apiKey);
    return this.http.get(this.apiUrl, { header });

  }
}

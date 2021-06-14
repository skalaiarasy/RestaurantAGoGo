import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  fav: Favorite = {
    favoriteId: -1,
    userId: '',
    yelpId: '',
    restaurantName: '',
    restaurantAddress: '',
    img:''
  };


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

  getMyFavorites(): any {
    return this.http.get(this.baseUrl + "api/favorite/GetMyFavorites");
  }
  //getAllByCategory(category: string): Restaurant[] {
  //  let result: Restaurant = {
  //    name: '',

  //  };
  //  this.restaurants.forEach((r: Restaurant) => {
  //    result = r;
  //  })
  //  return result;
  /*}*/

  //getting the catory id ; then pull the information
  //getCategoryFromId(id: number): any {
  //  let result: Event = { id: -1, eventName: "", price: 0, eventLocation: "", postTime: "" };

  //  return this.http.get(this.baseUrl + "api/event/id?id=" + id);



  //}

  currentId: number = -1;

  setID(newId: number): void {
    this.currentId = newId;

  }

  getID(): number {
    return this.currentId;
  }

  addFavorite(id: number) {
    let newFavorite : Favorite = {
      favoriteId: id,
      userId: this.currentId,
      yelpId: this.yelpId,
      restaurantName: this.restuarantName,
      restaurantAddress: this.restuarantAddress,
      img: this.img
    };
    
    const params = new HttpParams();
    //need to fix this code
    return this.http.post(this.baseUrl + "api/favorite/AddFavorite?loginId=" + newFavorite.UserId + "&Password=" + newFavorite.firstName + "&eventId=" + newFavorite.eventId, params)
      .subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(error);
        }
      );

  }

  password: string = "";

  setPassword(newPass: string): void {
    this.currentPass = newPass;

  }

  getPassword(): string {
    return this.currentPass;
  }

  removeFavorite(favoriteId: number) {
    //need to fix this code
    return this.http.delete(this.baseUrl + "/api/favorite/deleteFav?eventId=" + favoriteId + "&UserId=" + this.currentId).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      }
    );
  }

 
}


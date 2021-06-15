import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Restaurant } from './Restaurant';
import { Router } from '@angular/router';
import { Favorite } from './Favorite';

@Injectable({ providedIn: 'root' })


export class RestaurantapiService {

  zip_code = "";
  categories = "";
    apiUrl: string = `/yelp/businesses/search?location=${this.zip_code}&sort_by=distance&limit=50&term=restaurants&radius=40000&categories=${this.categories}`;
  constructor(private http: HttpClient, public router: Router) {
   
  }
  baseUrl: string;
  restaurants: Restaurant[] = [];
  favorites: Favorite[] = [];
  fav: Favorite = {
    favoriteId: -1,
    userId: -1,
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
   // return this.http.get(this.apiUrl); need to ask
  }

  getMyFavorites(): any {
    return this.http.get(this.baseUrl + "api/Restaurant/getmyfavorites");
  }
  

  

  currentId: number = -1;

  setID(newId: number): void {
    this.currentId = newId;

  }

  getID(): number {
    return this.currentId;
  }
  //https://localhost:44334/api/Restaurant/addfavorite?userId=3&catoryId=mex123&restaurantName=Mexican&restaurantAddress=Troy&img=sdds233
  addFavorite(id: number) {
    let newFavorite : Favorite = {
      favoriteId: null,
      userId: this.currentId,
      yelpId: this.categories,
      restaurantName: this.categories,
      restaurantAddress: this.categories,
      img: this.categories
    };
    
    const params = new HttpParams();
    //need to fix this code
    return this.http.post(this.baseUrl + "api/Restaurant/addfavorite?userId=" + newFavorite.userId + "&catoryId=" + newFavorite.yelpId + "&restaurantName=" + newFavorite.restaurantName + "&restaurantAddress=" + newFavorite.restaurantAddress, params)
      .subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(error);
        }
      );

  }

  //password: string = "";

  //setPassword(newPass: string): void {
  //  this.currentPass = newPass;

  //}

  //getPassword(): string {
  //  return this.currentPass;
  //}


  //Remove Favorite
  //https://localhost:44334/api/Restaurant/deletefav?userId=1&favId=2
  removeFavorite(favoriteId: number, userId:number) {
    //need to fix this code
    return this.http.delete(this.baseUrl + "/api/Restaurant/deletefav?userId=" + userId + "&favId=" + favoriteId).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      }
    );
  }





}


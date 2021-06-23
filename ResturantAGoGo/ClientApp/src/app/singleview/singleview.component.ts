import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatastoreService } from '../datastore.service';
import { Favorite } from '../Favorite';
import { Restaurant } from '../Restaurant';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
    selector: 'app-singleview',
    templateUrl: './singleview.component.html',
    styleUrls: ['./singleview.component.css']
})
/** singleview component*/
export class SingleviewComponent {

  message: string = '';
  restaurant: Restaurant = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    type: [],
    yelpID: "",
    img: "",
    url: "",
    rating: 0,
    phone: "",
    price: "",
    latitude: 0,
    longitude: 0,
  }
    
    /** singleview ctor */
    constructor(private service: RestaurantapiService, public datastoreService:DatastoreService, public router: Router, public route: ActivatedRoute) {

  }
  favList: Favorite[] = [];

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.service.getRestaurantbyID(id).subscribe(
      (response) => {
        this.restaurant.name = response.name;
        this.restaurant.address = response.location.address1;
        this.restaurant.city = response.location.city;
        this.restaurant.state = response.location.state;
        this.restaurant.zip = response.location.zip_code;
        this.restaurant.type = response.categories;
        this.restaurant.yelpID = response.id;
        this.restaurant.img = response.image_url;
        this.restaurant.url = response.url;
        this.restaurant.rating = response.rating;
        this.restaurant.phone = response.display_phone;
        this.restaurant.price = response.price;
        this.restaurant.latitude = response.coordinates.latitude;
        this.restaurant.longitude = response.coordinates.longitude;
      }
    )
    this.getFavorites();
  }
  
  getFavorites(): void {
    this.service.getMyFavorites().subscribe(
      (response: any) => {
        this.favList = response.filter((f: Favorite) => f.userId == this.datastoreService.getUser().userId);
        console.log(this.favList);
      }
    )
  }

  addFavorite(restaurant: Restaurant) {
    let id = this.datastoreService.getUser().userId;
    if (id != undefined) {
      this.service.setID(id);
    }
    if (this.service.getID() == -1) {
      this.router.navigate(['login']);
    }
    else {
      this.service.addFavorite(restaurant);
      let newfavorite: Favorite = {
        yelpId: restaurant.yelpID,
        restaurantName: "",
        restaurantAddress: "",
        img: "",
        favoriteId: 0,
        userId: 0
      };
      this.favList.push(newfavorite);
      this.message = 'Restaurant successfully added in your list.';
      ///* this.light2 = !this.light2; tried, didn't work
      //this.service.toggleLight2(restaurant);
      this.router.navigate(['restaurant-all']);
    }
    //this.service.addFavorite(restaurant);
    //this.router.navigate(['restaurant-all']);
  }

  removeFavorite(id: string) {
    let userId: number = this.datastoreService.getUser().userId;
    let favId: number = this.favList.find(f => f.yelpId == id && f.userId == userId).favoriteId;
    this.service.removeFavorite(favId, userId);
    this.message = "Favorite successfully removed.";
    /*this.router.navigate(['favorites']);*/
  }

  favList: Favorite[] = [];

  removeFavorite(favId: number, userId: number) {
    this.service.removeFavorite(favId, userId);
    let thisCategory = this.favList.find(e => e.favoriteId == favId);
    let index = this.favList.indexOf(thisCategory);
    this.favList.splice(index, 1);
  }
}


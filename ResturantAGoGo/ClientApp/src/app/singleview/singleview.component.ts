import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../Restaurant';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
    selector: 'app-singleview',
    templateUrl: './singleview.component.html',
    styleUrls: ['./singleview.component.css']
})
/** singleview component*/
export class SingleviewComponent {

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
  //interface Category {
  //  alias: "",
  //  title: ""
  /*}*/
    
    /** singleview ctor */
    constructor(private service: RestaurantapiService, public router: Router, public route: ActivatedRoute) {

  }

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
  }
}


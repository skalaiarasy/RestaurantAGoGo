import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../Restaurant';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
    selector: 'app-random',
    templateUrl: './random.component.html',
    styleUrls: ['./random.component.css']
})
/** random component*/
export class RandomComponent {
    /** random ctor */
    constructor(public service: RestaurantapiService, public router: Router) {

  }

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
  }

  ngOnInit(): void {
    this.getRandomRestaurant();
  }

  getRandomRestaurant():void {
    this.service.randomCall().subscribe(
      (response: any) => {
        console.log(response);
        let result: any = response.businesses[Math.floor(Math.random() * response.businesses.length)];
        console.log(response.businesses.length);
        this.restaurant.name = result.name;
        this.restaurant.address = result.location.address1;
        this.restaurant.city = result.location.city;
        this.restaurant.state = result.location.state;
        this.restaurant.zip = result.location.zip_code;
        this.restaurant.type = result.categories;
        this.restaurant.yelpID = result.id;
        this.restaurant.img = result.image_url;
        this.restaurant.url = result.url;
        console.log(this.restaurant);
      }
    )
  }
}

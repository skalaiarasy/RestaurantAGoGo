import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
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
  }
  //interface Category {
  //  alias: "",
  //  title: ""
  /*}*/
    
    /** singleview ctor */
    constructor(private service: RestaurantapiService, public router: Router) {

    }
}

import { Component, OnInit } from '@angular/core';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
    selector: 'app-restaurant-all',
    templateUrl: './restaurant-all.component.html',
    styleUrls: ['./restaurant-all.component.scss']
})
  
/** RestaurantAll component*/
export class RestaurantAllComponent implements OnInit{

  
    /** RestaurantAll ctor */
    constructor(private service:RestaurantapiService) {

  }

  ngOnInit(): void {
    this.getRestaurants();
  }
  getRestaurants(): void{
    this.service.getAllRestaurants().subscribe(
      (response: any) => {
        console.log(response)
      });
  }

}

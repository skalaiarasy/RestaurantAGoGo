import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../Restaurant';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
    selector: 'app-restaurant-all',
    templateUrl: './restaurant-all.component.html',
    styleUrls: ['./restaurant-all.component.scss']
})
  
/** RestaurantAll component*/
export class RestaurantAllComponent implements OnInit{

  restaurantList: Restaurant[] = [];

    /** RestaurantAll ctor */
    constructor(private service:RestaurantapiService) {
    
  }

  ngOnInit(): void {
    this.getRestaurants();
  }
  
  getRestaurants(): void{
    this.service.getAllRestaurants().subscribe(
      (response: any) => {
        response.businesses.forEach((b) => {
          /*console.log(b);*/
          let restaurant: Restaurant = {
            name: b.name,
            address: b.location.address1,
            city: b.location.city,
            state: b.location.state,
            zip: b.location.zip_code,
            type: b.categories,
            img: b.img,
          }
          this.restaurantList.push(restaurant);
        })
        /*console.log(response)*/
      });
  }

  

}

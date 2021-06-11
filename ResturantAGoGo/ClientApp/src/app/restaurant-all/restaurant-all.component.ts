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
  //name: string = '';
  //address: string = '';
  //city: string = '';
  //state: string = '';
  //zip: number = 0;
  //openNow: boolean = true;
  //type: string = '';
  //img: string = '';

    /** RestaurantAll ctor */
    constructor(private service:RestaurantapiService) {
    
  }

  ngOnInit(): void {
    this.getRestaurants();
  }
  
  getRestaurants(): void{
    this.service.getAllRestaurants().subscribe(
      (response: any) => {
        //this.name = response.businesses.name;
        //this.address = response.businesses.location.address1;
        //this.city = response.location.city;
        //this.state = response.state;
        //this.zip = response.zip;
        //this.openNow = response.openNow;
        //this.type = response.type;
        //this.img = response.img;
        //this.restaurantList = response.businesses;
        response.businesses.forEach((b) => {
          /*console.log(b);*/
          let restaurant: Restaurant = {
            name: b.name,
            address: b.location.address1,
            city: b.location.city,
            state: b.location.state,
            zip: b.location.zip_code,
            openNow: b.is_closed,
            type: b.categories[0].title,
            img: b.image_url
          }
          this.restaurantList.push(restaurant);
        })
        /*console.log(response)*/
      });
  }

}

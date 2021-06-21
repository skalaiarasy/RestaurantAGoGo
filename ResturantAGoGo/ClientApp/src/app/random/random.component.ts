import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    constructor(public service: RestaurantapiService, public router: Router, private route: ActivatedRoute) {

  }

  restaurants: Restaurant[] = [];

  ngOnInit(): void {
    
    this.service.setZip(+this.route.snapshot.paramMap.get("zip"));
      this.getRandomRestaurant();
  }

  getRandomRestaurant(): void {
    this.service.randomCall().subscribe(
      (response: any) => {
        console.log(response);

        for (var i = 0; i < (Number)(this.route.snapshot.paramMap.get("count")); i++) {


          let result: any = response.businesses[Math.floor(Math.random() * response.businesses.length)];
          console.log(response.businesses.length);
          let newRestaurant: Restaurant = {
            name: result.name,
            address: result.location.address1,
            city: result.location.city,
            state: result.location.state,
            zip: result.location.zip_code,
            type: result.categories,
            yelpID: result.id,
            img: result.image_url,
            url: result.url,
            rating: result.rating,
            phone: result.display_phone,
            price: result.price,
            latitude: result.coordinates.latitude,
            longitude: result.coordinates.longitude
          };
          this.restaurants.push(newRestaurant);
        }
      }
    )
  }
}


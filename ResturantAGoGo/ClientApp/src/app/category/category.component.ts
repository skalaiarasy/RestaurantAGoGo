import { Component } from '@angular/core';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
/** category component*/
export class CategoryComponent {
    /** category ctor */
  constructor(private service: RestaurantapiService) {

  }

  //getByCategories(): void {
  //  this.service.getAllRestaurants().subscribe(
  //  )
  //}
}

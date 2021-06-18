import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurant } from '../Restaurant';
import { RestaurantapiService } from '../restaurantapi.service';
import { Router } from '@angular/router';
import { DatastoreService } from '../datastore.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
/** category component*/
export class CategoryComponent {

  /*restByCatList: Restaurant[] = [];*/
  zip_code: number = -1;
  categories: string = '';

    /** category ctor */
  constructor(private service: RestaurantapiService, public router: Router, public datastoreservice: DatastoreService) {

  }
  setZipCode(form: NgForm): void {
    console.log(this.datastoreservice.getUser());
    this.zip_code = form.form.value.zip_code;
    console.log(this.zip_code);
    if (this.zip_code == undefined)
    {
      this.zip_code = -1;
    }
    this.service.setZip(this.zip_code);
  }

  setCategoryClick(categories: string): void {
    this.categories = categories;
    console.log(this.categories);
    this.service.setCategory(this.categories);
    this.router.navigate(['/restaurant-all']);
  }

}

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
    this.router.navigate(['/restaurant-all',this.zip_code,this.categories]);
  }



  // This will validate the zip code entered on the zipcode page.
  validateZipCode = () => {
    let input = document.getElementById('zip_code').nodeValue;
    let output = document.getElementById('zipCodeConfirmed');

    const regex = /(\d{5})(\d{4})/;

    if (input.length === 5) {
      output.innerHTML = "Valid 5-digit zipcode."
    } else if (input.length === 9) {
      output.innerHTML = input.replace(regex, "$1-$2 is a valid zipcode.");
      // Replace contents of text field
      document.getElementById('zip_code').nodeValue = input.replace(/(\d{5})(\d{4})/, "$1-$2");
    } else {
      output.innerHTML = "Zipcode entered is invalid."
    }
  }


}

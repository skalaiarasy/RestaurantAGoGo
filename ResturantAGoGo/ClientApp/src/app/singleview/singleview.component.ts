import { Component, OnInit, } from '@angular/core';
import { Restaurant } from '../Restaurant';

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
    constructor() {

    }
}

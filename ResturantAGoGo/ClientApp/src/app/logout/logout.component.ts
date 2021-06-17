import { Component } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { RestaurantapiService } from '../restaurantapi.service';


@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
/** logout component*/
export class LogoutComponent {
    /** logout ctor */
    constructor(private datastoreservice : DatastoreService, private restaurantapiservice: RestaurantapiService) {

  }

  ngOnInit(): void {
    this.restaurantapiservice.setID(-1);
    this.datastoreservice.signOut();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { DatastoreService } from '../datastore.service';
import { Favorite } from '../Favorite';
import { Restaurant } from '../Restaurant';
import { RestaurantapiService } from '../restaurantapi.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
/** Favorites component*/
export class FavoritesComponent {
  /** Favorites ctor */
  constructor(private service: RestaurantapiService, public router: Router, private datastoreService: DatastoreService){

  }
  favList: Favorite[] = [];
  restaurants: Restaurant[] = [];
  favCategory: Restaurant[] = [];

  //need to fix the code

  ngOnInit() {
    this.service.getMyFavorites().subscribe(
      (response: any) => {
        this.favList = response.filter((f: Favorite)=> f.userId == this.datastoreService.getUser().userId);
        console.log(this.favList);
      }
    )
  }

  addFavorite(restaurant: Restaurant) {
    this.service.addFavorite(restaurant);

  }

  removeFavorite(favId: number, userId: number) {
    this.service.removeFavorite(favId, userId);
    let thisCategory = this.favList.find(e => e.favoriteId == favId);
    let index = this.favList.indexOf(thisCategory);
    this.favList.splice(index, 1);
  }

  


}


import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private service: RestaurantapiService, public router: Router, private datastoreService: DatastoreService, public route:ActivatedRoute){

  }
  favList: Favorite[] = [];
  restaurants: Restaurant[] = [];
  

  //need to fix the code

  ngOnInit() {
    //this.service.setCategory(this.route.snapshot.paramMap.get("category"));
    //this.service.setZip(+this.route.snapshot.paramMap.get("zip"));
    this.service.getMyFavorites().subscribe(
      (response: any) => {
        this.favList = response.filter((f: Favorite)=> f.userId == this.datastoreService.getUser().userId);
        console.log(this.favList);
      }
    )
  }

  addFavorite(restaurant: Restaurant) {
    if (this.checkLogin() == true) {
      this.service.addFavorite(restaurant);
    }
    else
    {
      this.router.navigate(['/login']);
    }
  }

  checkLogin(): boolean {
    let user = this.datastoreService.getUser();
    if (user.userName != null) {
      if (this.service.getID() != -1)
      {
        /*this.restaurantapiservice.setID(user.userId);*/
        //console.log(this.restaurantapiservice.getID());
       
      }
      return true;
    }
    else
    {
      return false;
    }
  }
  removeFavorite(favId: number, userId: number) {
    this.service.removeFavorite(favId, userId);
    let thisCategory = this.favList.find(e => e.favoriteId == favId);
    let index = this.favList.indexOf(thisCategory);
    this.favList.splice(index, 1);
  }

  


}


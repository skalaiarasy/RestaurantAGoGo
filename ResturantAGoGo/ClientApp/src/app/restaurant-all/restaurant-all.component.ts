import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatastoreService } from '../datastore.service';
import { Favorite } from '../Favorite';
import { Restaurant } from '../Restaurant';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
    selector: 'app-restaurant-all',
    templateUrl: './restaurant-all.component.html',
    styleUrls: ['./restaurant-all.component.css']
})
  
/** RestaurantAll component*/
export class RestaurantAllComponent implements OnInit{

  restaurantList: Restaurant[] = [];
  filteredRestaurantLists: Restaurant[] = [];
    currentId: number;
  favList: Favorite[];

    /** RestaurantAll ctor */
    constructor(private service:RestaurantapiService, private route:ActivatedRoute, public router:Router, public datastoreservice: DatastoreService) {
    
  }

  /*space: string = "-";*/

  ngOnInit(): void {
    this.service.setCategory(this.route.snapshot.paramMap.get("category"));
    this.service.setZip( +this.route.snapshot.paramMap.get("zip"));
  
    this.getRestaurants();
    this.getFavorites();
  }

  getFavorites(): void {
    this.service.getMyFavorites().subscribe(
      (response: any) => {
        this.favList = response.filter((f: Favorite) => f.userId == this.service.getID());
        console.log(this.favList);
      }
    )
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
            yelpID: b.id,
            img: b.image_url,
            url: b.url,
            rating: b.rating,
            phone: b.display_phone,
            price: b.price,
            latitude: b.latitude,
            longitude: b.longitude
          }
          this.filteredRestaurantLists.push(restaurant);
          this.restaurantList.push(restaurant);
        })
        console.log(response);
      });
  }
  /*light2: boolean = true;*/
  checkFavorite(restaurant: Restaurant): boolean {
    let result = this.favList.find(f => f.yelpId == restaurant.yelpID);
    if (result == null) {
      return false;
    }
    else {
      return true;
    }
  }
  

  addFavorite(restaurant: Restaurant) {
    let id = this.datastoreservice.getUser().userId;
    if (id != undefined) {
      this.service.setID(id);
    }
    if (this.service.getID() == -1)
    {
      this.router.navigate(['login']);
    }
    else
    {
      this.service.addFavorite(restaurant);
      let newfavorite: Favorite = {
        yelpId: restaurant.yelpID,
        restaurantName: "",
        restaurantAddress: "",
        img: "",
        favoriteId: 0,
        userId: 0
      };
      this.favList.push(newfavorite);
      ///* this.light2 = !this.light2; tried, didn't work
      //this.service.toggleLight2(restaurant);
      this.router.navigate(['restaurant-all']);
    }
    //this.service.addFavorite(restaurant);
    //this.router.navigate(['restaurant-all']);
  }


  removeFavorite(userId: number, favId:number) {
    this.service.removeFavorite(userId,favId);
    this.router.navigate(['restuarant-all']);
  }

  private _listFilter: string = '';
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredRestaurantLists = this.filterAllRestaurant(value);
  }
  filterAllRestaurant(filterBy: string): Restaurant[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.restaurantList.filter((oneRestaurant: Restaurant) =>
      oneRestaurant.name.toLocaleLowerCase().includes(filterBy));
  }
  //light2: boolean = true; 

  //toggleLight2(restaurant:Restaurant): void {
  //  this.light2 = !this.light2;
  //}
}

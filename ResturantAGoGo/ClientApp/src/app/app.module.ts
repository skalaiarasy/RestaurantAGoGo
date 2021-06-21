import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RestaurantAllComponent } from './restaurant-all/restaurant-all.component';
import { CategoryComponent } from './category/category.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RandomComponent } from './random/random.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { LogoutComponent } from './logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RestaurantAllComponent,
    CategoryComponent,
    FavoritesComponent,
    RegisterComponent,
    LoginComponent,
    RandomComponent,
    SingleviewComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'restaurant-all/:zip/:category', component: RestaurantAllComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'random/:count/:zip', component: RandomComponent },
      { path: 'singleview/:id', component: SingleviewComponent },
      { path: 'logout', component: LogoutComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

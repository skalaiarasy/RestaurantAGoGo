import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { DatastoreService } from '../datastore.service';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/** login component*/
export class LoginComponent {
  /** login ctor */
  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private service: AuthenticateService, private tokenStorage: DatastoreService, public router: Router, public restaurantService: RestaurantapiService) { }
  ngOnInit(): void {
    console.log(this.tokenStorage.getUser());
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;
    this.service.login(username, password).subscribe(
      data => {
        console.log(data);
        if (data == null) {
          this.errorMessage = "invalid login";
          this.isLoginFailed = true;
        }
        else {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.restaurantService.setID(data.userId);
          //this.reloadPage();

          this.router.navigate(['/category']);
        }
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}

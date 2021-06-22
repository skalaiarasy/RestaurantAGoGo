import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private service: AuthenticateService) { }

  ngOnInit(): void {
  }
    
  onSubmit(form: NgForm): void {
    let username:string = form.form.value.username;
    let password:string = form.form.value.password;
    console.log(username);
    console.log(password);
        
    this.service.register(username, password).subscribe(
      data => {
        if (data == null) {
          this.isSuccessful = false;
          this.isSignUpFailed = true;
        }
        else {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        }
        console.log(data);
      });
    
  }
}

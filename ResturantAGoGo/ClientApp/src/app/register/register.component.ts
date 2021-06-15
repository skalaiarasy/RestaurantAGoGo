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

  //onSubmit(): void {
  //  const { username, password } = this.form;
  //  console.log(this.form);
  //  this.service.register(username, password).subscribe(
  //    data => {
  //      console.log(data);
  //      this.isSuccessful = true;
  //      this.isSignUpFailed = false;
  //    },
  //    err => {
  //      this.errorMessage = err.error.message;
  //      this.isSignUpFailed = true;
  //    }
  //  );
  //}

  onSubmit(form: NgForm): void {
    let username:string = form.form.value.username;
    let password:string = form.form.value.password;
    //const { username, password } = this.form;
    /*console.log(this.form);*/
    console.log(username);
    console.log(password);
    this.service.register(username, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}

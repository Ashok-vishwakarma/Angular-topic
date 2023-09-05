import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  [x: string]: any;


  // auth task and httpclien direct imported here   
  constructor(private Router: Router, private HttpClient: HttpClient) { }

  signup = new FormGroup({
    FirstName: new FormControl(),
    LastName: new FormControl(),
    Username: new FormControl(),
    password: new FormControl(),
    number: new FormControl(),
    email: new FormControl(),

  })


  signuppage() {
    // return console.log (signup)  
    this.HttpClient.post("http://localhost:3000/comments", this.signup.value)
      .subscribe(ret=>{console.log("see1",this.signup.value),
      //using localstorage for save data  only below two line
        console.log(localStorage.setItem("userdata", JSON.stringify(this.signup.value.email)))
        console.log(localStorage.setItem("userdata", JSON.stringify(this.signup.value.password)))
        this.signup.reset(),
        this.Router.navigate(["login"])}
        
        )

        
  }


  /////authtication task for login/signup navigation to get access for other module/component
  // useradd(signup: any) {
  //   this.HttpClient.post("http://localhost:3000/comments", this.signup.value)
  //     .subscribe(res => {
  //       this.Toasterservice.success(signup, "sucessfully signup")
  //       this.signup.reset();
  //       this.Router.navigate(["login"]) },
  //       err=>{alert("sucessfully login")}
  //       )
  // }

  // useradd(signup: any) {
  //   this.HttpClient.post("http://localhost:3000/comments", this.signup.value)
  //     .subscribe(ret=>{console.log(this.signup)})

  // }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';



export type Comments = {
  FirstName: string,
  LastName: string,
  Username: string,
  password: string,
  number: number,
  email: string,
  id: number
};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  constructor(private http: HttpClient, private _route: Router) { }

  loginpage = new FormGroup({
    email: new FormControl(),
    password: new FormControl()

  })
  // login http define for varification 

  logininfo() {
    // return console.log(loginpage)
    // return this.loginpage.value
    this.http.get<any>("http://localhost:3000/comments")
      .subscribe(result => {

        const info = result.find((a: any) => {


          return a.email === this.loginpage.value.email && a.password === this.loginpage.value.password
          //  return console.log (a.email === this.loginpage.value.email && a.password === this.loginpage.value.password)
        })
        if (info) {
          alert("successful login");
          this.loginpage.reset();
          this._route.navigate([""])
        }
        else {
          alert("create your account")
          this._route.navigate(["signup"])
        }

      },
        err => {
          alert("somthing went wrong")
        })


  }







}








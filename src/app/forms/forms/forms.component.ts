import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],


})
export class FormsComponent  {



  email: string = '';
  password: any = '';

  signupform(signform: NgForm) {
    // console.log(signform.value.passwardfeild)
    console.log(this.email)
    // console.log(signform.value.emailfeild)
    console.log(signform.value.passwardfeild)
    // console.log(signform)
  }

  login = new FormGroup({
    user: new FormControl(""),
    passward: new FormControl("")

  })

  submitdetail() {
    // console.log(this.login.value)
    return this.login.value
  }






}

function jsonsuing(arg0: string) {
  throw new Error('Function not implemented.');
}




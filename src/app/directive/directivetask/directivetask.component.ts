import { Component } from '@angular/core';

@Component({
  selector: 'app-directivetask',
  templateUrl: './directivetask.component.html',
  styleUrls: ['./directivetask.component.css']
})
export class DirectivetaskComponent {


  users = [
    {
      name:"venom",
      age:23
    },
    { 
      name:"shiva",
      age:43
    },
  
    {
      name:"rahul",
     age:29
    },
  
    {
      name:"raj",
     age:49
    },
  
    {
      name:"akki",
      age:20
    }
  ]
}

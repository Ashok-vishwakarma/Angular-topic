import { Component, OnInit } from '@angular/core';
import { Observable, timeout } from 'rxjs';

@Component({
  selector: 'app-observal',
  templateUrl: './observal.component.html',
  styleUrls: ['./observal.component.css']
})
export class ObservalComponent implements OnInit{
   orderstatus='';
   data!:Observable<any>
  
  constructor(){}
  // using obserable
  ngOnInit(): void {   
    this.data=new Observable(observer=>{
      setTimeout(() => {
        observer.next("offline")
      }, 1000);
      setTimeout(() => {
        observer.next("processing")
      }, 2000);
      setTimeout(() => {
        observer.next("online")
      }, 3000);
      setTimeout(() => {observer.error("please login first")}, 10000);
      setTimeout(() => {
        observer.complete()
      }, 20000);
      
      
      
     })
    this.data.subscribe((x)=>{this.orderstatus=x})
  }


  
  

}

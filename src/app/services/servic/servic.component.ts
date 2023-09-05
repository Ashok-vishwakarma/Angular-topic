import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-servic',
  templateUrl: './servic.component.html',
  styleUrls: ['./servic.component.css']
})
export class ServicComponent implements OnInit {


  constructor( private ServiceService: ServiceService) { }
  

//  user=this.ServiceService.getfunction

clientdetail:any=[]
// userdetail:any=[]
// data:any
// dataa:any=[]

  ngOnInit(): void {
  
    this.ServiceService.client().subscribe(dataa=>{this.clientdetail=dataa})
    // this.ServiceService.client().subscribe(this.dataa)       this method will not work
  //without using json,http, observable displaying data at UI                  
  //  this.data=this.ServiceService.getfunction  
  
  // this.ServiceService.getfunction("clientdetail").subscribe(detail=>{this.userdetail=detail})


  // delete method




  };
  
  
  remove(id: number){
    this.ServiceService.deletemethod(id).subscribe(del=>{
      console.log(del);
      
    })
  };

  paramscheck(){
    this.ServiceService. querymethod().subscribe(man=>{console.log (man)})
  }



}

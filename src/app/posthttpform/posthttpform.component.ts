import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/servic/service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posthttpform',
  templateUrl: './posthttpform.component.html',
  styleUrls: ['./posthttpform.component.css']
})



export class PosthttpformComponent {

  constructor(private serviceservice: ServiceService) { }


  username: string = ''
  email: any = ''
  passward: any = ''
 

  newuse(abc: NgForm) {
    this.serviceservice.postfunction(abc.value).subscribe((returnn) => { console.warn })
  }

  deletetheuser(id:NgForm){
    this.serviceservice. deletemethod(id)
  }
  

  table:any
  detail(){
    return this.serviceservice. client().subscribe(info=>{{this.table=info}})
    
  }


}

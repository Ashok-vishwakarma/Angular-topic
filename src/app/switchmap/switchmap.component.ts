import { Component, OnInit } from '@angular/core';
import { from, map, of, switchAll, switchMap } from 'rxjs';
import { ServiceService } from '../services/servic/service.service'; 

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit{
  
  
  switchmethod(data: string){
    return of(data + "video was uploaded")
  }


  ngOnInit(): void {

    const data = from(['first', 'second','third' , 'work-done']).pipe(
      // map(res=>(this.switchmethod(res))),
      // switchAll()  
      // we can using switchmap

      switchMap(res=>(this.switchmethod(res)))


    )
    .subscribe(res=>(console.log(res)))  
    // .subscribe(res=>res.subscribe(res1=>(console.log(res1))))
    
  }


}



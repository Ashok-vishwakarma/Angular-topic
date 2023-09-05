import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, filter, from, interval, map, tap, toArray } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../services/servic/service.service';


export interface Iemploy {
  id:number,
  email:any,
  passward:number
}

@Component({
  selector: 'app-filter-rxjs',
  templateUrl: './filter-rxjs.component.html',
  styleUrls: ['./filter-rxjs.component.css']
})



export class FilterRXJSComponent implements OnInit {

  
 

  constructor(private serviceservice: ServiceService) { }


  memberdata = [{
    id: 1,
    name: 'nosjdf',
    age: 23,
  },

  {
    id: 2,
    name: 'mosh',
    age: 23,
  },
  {
    id: 3,
    name: 'ommi',
    age: 25,
  },
  {
    id: 1,
    name: 'nosjdf',
    age: 34,
  }
  ]
  data: any
 

  // ex-02 TAP function 




  // private unsubs:Subscription | any;
  // username = ['ashok', 'mosh', 'harry', 'tom', 'lily', 'adam', 'smith']

  userdata:any

  ngOnInit(): void {

    this.serviceservice.rxjs().subscribe(res=>{console.log(res)})
    this.serviceservice.rxjs().subscribe(res=>{this.userdata=res})
    
   
    const membername = from(this.memberdata)
    membername.pipe(
      filter(data => data.name.length > 4),
      toArray()
    ).
      subscribe(res => {
        console.log(res);
        this.data = res
      })



    //  ex-02


    // const username = ['ashok', 'mosh', 'harry', 'tom', 'lily', 'adam', 'smith']
    // let unsubs!: Subscription;

    // const Arr = interval(2000);
    // unsubs = Arr.pipe(
    //   // tap(fun=>'iaiam'+fun)
    //   tap(res => {
    //     if (res == 4) {
    //       unsubs.unsubscribe()
    //     }
    //   }),
    //   map(res => { username[res] }),

    // ).subscribe((res: any) => { console.log(res) }
    // )

    


  }


}
// function subscribe(arg0: (res: any) => void) {
//   throw new Error('Function not implemented.');
// }



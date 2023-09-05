import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Iemploy } from 'src/app/filter-rxjs/filter-rxjs.component';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  _url:any = "http://localhost:3000/posts"
  _rxjsused: string = "http://localhost:3000/posts"



  // _url:string= "C:\Users\Dell\Desktop\angular task file\angular_material\db.json"
  constructor(private http: HttpClient) { }

  rxjs(){                                                     //implement on filter-rxjs
    return this.http.get<Iemploy>(this._url)
 }

  client() {
    // header method
    const httpheadrer = new HttpHeaders({
      'content-text': 'application/json',
      'authorization': 'auth123455i@qkwd'
    })

    return this.http.get(this._url, { headers:  httpheadrer })
    //above line will return you observable 
  }


  // getfunction(clientdetail: string){
  //   return this.http.post(this._url,clientdetail)
  // }



  // this method is part of post method and this was implemented in posthttpform component 
  postfunction(useradd: any) {
    return this.http.post(this._url, useradd)
  }



  // this is the delete method of http part which was implement in posthttpcomponent

  deletemethod(id: any) {
    return this.http.delete("http://localhost:3000/posts/" +  id)
  }


  // using httpparams method 

  querymethod() {
    // header method
    const params = new HttpParams({
      fromObject: {
        query: 'ashok'

      }

    });
    return this.http.get(this._url, { params: new HttpParams })
  //above line will return you observable 
  }





  // without using json,http, observable displaying data at UI  
  // getfunction = [
  //   {
  //     id: 1,
  //     email: "json-server",
  //     passward: 123456
  //   },

  //   {
  //     id: 2,
  //     email: "ashok@gmail.com",
  //     passward: 8164098094
  //   },

  //   {
  //     id: 3,
  //     email: "abc@gmail.com",
  //     passward: 86783490
  //   },

  //   // { "id": 1, "title": "lowdb is awesome" }

  // ]




 


}

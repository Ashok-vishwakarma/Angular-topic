import { Component, OnInit } from '@angular/core';
import { Observable, concat, from, interval, map, merge, mergeAll, mergeMap, of, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  getfunction(data: any) {
    return of(data + "video was uploaded")
  }


  ngOnInit(): void {

    // Concat method used here  

    // const cotech=interval(1000).pipe(map(v=>('angular' +v)),take(5));
    // const cocomic=interval(1000).pipe(map(ress=>("Dotnet" + ress)),take(5))
    // const cofun=interval(1000).pipe(map(ress=>("python" + ress)),take(5))

    // const concating=concat(cotech,cocomic,cofun)

    // concating.subscribe(res=>{console.log(res)})


    // merge  method used here  same  function ---



    const cotech = interval(1000).pipe(map(v => ('angular' + v)), take(5));
    const cocomic = interval(500).pipe(map(ress => ("Dotnet" + ress)), take(5))
    const cofun = interval(1500).pipe(map(ress => ("python" + ress)), take(5))

    const concating = merge(cotech, cocomic, cofun)                                           //it will merge on the base of there time 

    concating.subscribe(res => { console.log(res) })


    // another example ex-01 on  map function where u sub again n again to get data type value

    // const functioning=['knowledge', 'fun', 'comedy','masti', 'tutorial']

    // from(functioning).pipe(
    //   map(res=>(this.getfunction(res)))
    // )
    // .subscribe(x=>(x.subscribe(x1=>(console.log(x1)))))


    // ex-02 using map + merge all in this you dont have to subscribe again n again just used mergeall() [map + mergeall]

    // const functioning1=['first', 'fun', 'comedy','masti', 'last']

    // from(functioning1).pipe(
      
    //   map(res=>(this.getfunction(res))),
    //   mergeAll()
    // )
    // .subscribe(x1=>(console.log(x1)))


  // EX-03 if we dont want to use mergall and map function then use mergeall function which do work of both mergeall n map


  const functioning3=['first', 'fun', 'comedy','masti', 'last']

  from(functioning3).pipe(
    
    mergeMap(res=>(this.getfunction(res))),
    
  )
  .subscribe(x3=>(console.log(x3)))

  // here, mergeAll=concatall , mergemap=concatmap










  }

}

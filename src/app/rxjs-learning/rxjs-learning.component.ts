import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription, from, fromEvent, interval, map, of, pipe, pluck, take, toArray } from 'rxjs';


@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
  
})
export class RxjsLearningComponent implements OnInit {


  a = [{ name: 'ashok', age: 67 },
  { name: 'ash', age: 23 },
  { name: 'as', age: 44 }]

  aarray$!: Observable<any>

  sourcecode!: Subscription
  plucknaj: any;
  ngOnInit(): void {
    this.student$.subscribe(data => { console.log(data) })
    // oservable should alwas hav dollor sign 
    this.studentname.subscribe(sname => { console.log(sname) })
    this.sobsobject.subscribe(ssoject => { console.log(ssoject) })


    //  28/06  interval method where we stop by assign variable give type subcription



    const arrying = from(this.a)
    //  arrying.pipe(toArray()).subscribe(w=>{console.log(w)})
    arrying.pipe(
      // map(data=>"using map function" + data),
      toArray()).subscribe(w => { console.log(w) })

    const source = interval(1000);
    this.sourcecode = source.pipe(
      take(2),
      //we can use different mthod of rxjs just putting comma n all the method should be writen inside .pipe
    ).subscribe(x => {
      console.log(x);

      if (x > 8) {
        this.sourcecode.unsubscribe()
      }

    })

    //  pluck method
    from(this.user_pluckmethod).pipe(
      // map(data => data.name),  //map is used for transformation of data in this example we frtcing value of property
       pluck('job','title'),
      toArray()
    ).subscribe(ser => { console.log(ser) })

    // const plucknajn=from(this.user_pluckmethod) // this 2 line is also give u same o/p as above line is giving(pluck metod)    
    // plucknajn.subscribe(ser=>{console.log(ser)})


  }




  searchingform = new FormGroup({
    text: new FormControl()
  })







  // using viewchild for implementing fromevent part of rjx . in this we created on button and aply on it
  // we can use this decorator multiple time
  @ViewChild('validate')
  validate!: ElementRef;

  // of using string
  studentname: Observable<string> = of('ram');

  //  of using for object
  sobject = {
    name: 'ashok',
    agr: 24,

  }

  sobsobject: Observable<any> = of(this.sobject)




  // using rxjs operator (of opreator) and in  which how we can use of at the place of observable method
  // just like obseravle can be any type like string,arra,object same thing we can aplly using of method

  student$: Observable<string[]> = of(['mosh', 'ashok', 'ajfnf'])
  takemethod: any;
  // you can also store value of array in 1 variale(student)=[] n then  mention the variable name inside of (this.student)  
  // define method of event using fromevent

  rxjsoperator() {
    const buttonevent$ = fromEvent(this.validate?.nativeElement, 'click')
    // created variable fromevent and it is connect to (this.validate)and (nativeElement) is the element which we will click
    // and mention event name i.e (click)
    buttonevent$.subscribe(event => { console.log(event) })

  }

  readvalue() {
    this.searchingform.value
  }

  // 28/06/2023



  // ex-1 pluck operation-> hamare data ki kise property ki singlr value ko deta h


  user_pluckmethod = [{
    name: 'nosjdf',
    age: 23,
    job: {
      title: "front-end",
      salary: 54
    },
  },
  {
    name: 'jndjfn',
    age: 12,
    job: {
      title: "backend",   //nested object using for plusk and we can call nested value using- pluck('job','tit) 
      salary: 54
    },
  },
  {
    name: 'oourni',
    age: 34,
    job: {
      title: "angular",
      salary: 54
    },
    

    
  
}]








}

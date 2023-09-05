import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-lifecycle',
  templateUrl: './task-lifecycle.component.html',
  styleUrls: ['./task-lifecycle.component.css']
})
export class TaskLifecycleComponent implements OnInit, OnDestroy {




  ngOnInit() {
    console.log(this.settime)
  }

  text() {
    console.log("this is my text/life cycle task")
  }


  settime: any
  timeinterval() {
    this.settime = setInterval(() => {
      this.text();
    }, 1000)
  }

  ngOnDestroy() {
    console.log(this.settime)
    // this.settime

  }

  // routerlet using parameatric routerlet
  paramquery=''
    constructor( private ActivatedRoute:ActivatedRoute){
  this.ActivatedRoute.params.subscribe(data=>{this.paramquery=data['id'];})
  console.log(ActivatedRoute) 
  }






}

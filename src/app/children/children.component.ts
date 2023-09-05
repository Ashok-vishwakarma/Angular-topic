import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
chil:any=''
  @Input() name:any
  @Output()  chil_data=new EventEmitter()


}

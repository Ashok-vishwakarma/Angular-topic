import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class CONTACTComponent {


  @Input() date: any
  // data: any="ashok"
  data: any = "try"
  info(text: any) {
    this.data = (text.value)
    // console.log(this.data)

  }

  timer() {
    this.timer=this.data
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
 abc:any=''
  
dataromchild=''
  getdata(reff:any){
     this.abc=reff.value
     console.log(this.abc)
    
    
  }

  childdata(item:any){
    // return item
    console.log(item)
    this.dataromchild=item
  }
  

}

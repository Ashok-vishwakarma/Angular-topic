import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';


import { HomeComponent } from './home/home.component';
import { CONTACTComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import { TaskLifecycleComponent } from './task-lifecycle/task-lifecycle.component';
import { TChildComponent } from './t-child/t-child.component';
import { AppnotfoundComponent } from './appnotfound/appnotfound.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ObservalComponent } from './observal/observal/observal.component';
import { ServicComponent } from './services/servic/servic.component';
import { DirectivetaskComponent } from './directive/directivetask/directivetask.component';
import { HttpClientModule } from '@angular/common/http';
import { PosthttpformComponent } from './posthttpform/posthttpform.component';
import { ToastrModule } from 'ngx-toastr';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { FilterRXJSComponent } from './filter-rxjs/filter-rxjs.component';
import { ConcatComponent } from './concat/concat.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CONTACTComponent,
    AboutComponent,
    TaskLifecycleComponent,
    TChildComponent,
    AppnotfoundComponent,
    ProductComponent,
    AdminComponent,
    FormsComponent,
    SignupComponent,
    ObservalComponent,
    CONTACTComponent,
    ServicComponent,
    DirectivetaskComponent,
    PosthttpformComponent,
    RxjsLearningComponent,
    FilterRXJSComponent,
    ConcatComponent,
    SwitchmapComponent,
    ParentComponent,
    ChildrenComponent,

   
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatTableModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule,
    MatSlideToggleModule
    
    

  ],

  


  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { 
  
}

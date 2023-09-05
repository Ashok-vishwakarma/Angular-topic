import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CONTACTComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TaskLifecycleComponent } from './task-lifecycle/task-lifecycle.component';
import { AppnotfoundComponent } from './appnotfound/appnotfound.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { adminGuardGuard } from './admin-guard.guard';
import { FormsComponent } from './forms/forms/forms.component';
import { SignupComponent } from './signup/signup.component';
// import { Observable } from 'rxjs';
import { ObservalComponent } from './observal/observal/observal.component';
import { ServicComponent } from './services/servic/servic.component';
import { DirectivetaskComponent } from './directive/directivetask/directivetask.component';
import { PosthttpformComponent } from './posthttpform/posthttpform.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { FilterRXJSComponent } from './filter-rxjs/filter-rxjs.component';
import { ConcatComponent } from './concat/concat.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';




// component:TaskLifecycleComponent, if we mention component path before child then we can't able to see child detail
const routes: Routes = [

  
  { path: "", component: HomeComponent },
  { path:"directive", component:DirectivetaskComponent },
  { path:"service", component: ServicComponent },
  {path:"obs",component:ObservalComponent },
  {path:"post",component:PosthttpformComponent },
  { path: "contact", component: CONTACTComponent },
  { path: "about", component: AboutComponent },
  { path: "task", component: TaskLifecycleComponent },
  {path:"forms" ,component:FormsComponent },
  {path:"rxjs" , component:RxjsLearningComponent},
  {path:"switch" , component:SwitchmapComponent},
  { path: "admin", component: AdminComponent , canActivate: [adminGuardGuard]  },
  { path: "task", children: [{ path: "product", component: ProductComponent }] },
  {path: "signup" , component: SignupComponent },
  {path: "filter" , component: FilterRXJSComponent },
  {path:"concat" , component:ConcatComponent },
  {path:"parent",component:ParentComponent },
  {path:"child" , component:ChildrenComponent },
  { path: "lazy", loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },

  
  { path: "login", loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  // {path:"signup",redirectTo:"signup",pathMatch:'full'},
  
  
  { path: "**", component: AppnotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

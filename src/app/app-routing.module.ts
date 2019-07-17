import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ RegisterComponent } from './register/register.component';
import{ HomeComponent } from './home/home.component';
import{ ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},




  {path:'',component:RegisterComponent},
   {path:"**", redirectTo: 'ErrorComponent', pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

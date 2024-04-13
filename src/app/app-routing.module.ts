import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import{ListingPagesComponent} from '../app/listing-pages/listing-pages.component'
import {UserDetailsComponent} from './user-details/user-details.component'
const routes: Routes = [
   {path:'profile', component:UserDetailsComponent},
   {path:'listing', component:ListingPagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

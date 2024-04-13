import { Component, OnInit} from '@angular/core';
import { AppModel } from '../app.model';
import {ApiDataService} from '../services/api-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  user:AppModel=new AppModel();
  constructor(public api:ApiDataService, private router:Router) { 
    this.user=this.api.userData;
    
  }

  ngOnInit(): void {
  }
  logoutUser(){
    this.router.navigate([''])
  .then(() => {
    window.location.reload();
  });
  }
  
}

import { Component, OnInit,Input } from '@angular/core';
import { AppModel } from '../app.model';
import {ApiDataService} from '../services/api-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user:AppModel=new AppModel();
   constructor(public api:ApiDataService) { 
    this.user=this.api.userData;
  }
  
    ngOnInit(): void {
    }
  

}

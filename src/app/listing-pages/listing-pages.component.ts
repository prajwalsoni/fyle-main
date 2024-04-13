import { Component, OnInit,Input } from '@angular/core';
import {ApiDataService} from '../services/api-data.service'
import { AppModel } from '../app.model';

@Component({
  selector: 'app-listing-pages',
  templateUrl: './listing-pages.component.html',
  styleUrls: ['./listing-pages.component.css']
})
export class ListingPagesComponent implements OnInit {

  username:string=this.api.userData.login;
  repos:[{
    name:string,
    description:string,
    html_url:string,
    language:string,
  }]=[{
    name:'',
    description:'',
    html_url:'',
    language:'',
  }]

  languages:string[]=[]
  constructor(
    private api:ApiDataService) { }

  ngOnInit(): void {
    this.showRepositories();
  }

  showRepositories(){
    console.log(this.username)
    this.api.getRepositories(this.username)
    .subscribe((res:any)=>{
      this.repos=res;
      console.log(res);
    })
  }
   
  myArr:string[]=[];
  
 
  // Also need to pass username of repo:
  showLanguages(repoName:any){
    console.log(repoName)
    this.api.getLanguages(repoName)
    .subscribe((res:any)=>{
      this.languages=Object.keys(res);
      console.log(this.languages);
    })
  }
   
  repoName:string='';
   show(name:any){
       console.log(name.innerText);
       this.repoName=name.innerText;

       this.showLanguages(this.repoName);
   }

   // Pagination:
    p:number=1;


}





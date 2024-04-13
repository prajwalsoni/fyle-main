import { Component } from '@angular/core';
import {ApiDataService} from './services/api-data.service'
import {FormControl,FormGroup, Validators} from '@angular/forms'
import {AppModel} from './app.model'
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
  showSearch=true;
  appData:AppModel=new AppModel();
  formValue!:FormGroup;
  showLoading=false;
  ngOnInit(): void {
    this.formValue=new FormGroup({
      'username':new FormControl('' , Validators.required,)

    })
  }

  userData=[{login:''}];

  getData(){
    this.api.getUsers()
    .subscribe((res:any)=>{
      this.userData=res;
      })
  }

  showList=false;

  showListing(){
    this.showList=true;
    this.getData();
  }

  constructor(
    public api:ApiDataService,
    private router:Router
    ) {
      this.appData=this.api.userData;
}


  showError=false;
  loadingAPI(){
    if(this.formValue.value.username=='')
    {
      this.router.navigate([''])
      .then(() => {
        window.location.reload();
      });
    }
    else{
    this.showLoading=true;
    this.showSearch=false;
    this.showList=false;
    setTimeout(()=>{                          
      this.getUserByName();
    }, 5000);
  }
    
  }
   
  // Getting data from API:
  getUserByName(){
    this.showLoading=false;
    this.showSearch=false;
    this.showList=false;
 
    this.router.navigate(['/profile']);
    this.api.getUser(this.formValue.value.username)
    .subscribe((res:any)=>{
      
      })
    
  }

  
}

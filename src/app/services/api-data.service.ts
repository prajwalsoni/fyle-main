import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {AppModel} from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
   userData:AppModel=new AppModel();
  constructor(private http :HttpClient) {
  }
  
  getUser(name:any){
   return this.http.get<any>("https://api.github.com/users/"+name)
   .pipe(map((res:any)=>{
     this.userData=res;
        return res;
   }))
  }

  getUsers(){
   return this.http.get<any>("https://api.github.com/users")
   .pipe(map((res:any)=>{
        return res;
   }))
  }

  getRepositories(name:any){
    return this.http.get<any>("https://api.github.com/users/"+name+"/repos")
    .pipe(map((res:any)=>{
         return res;
    }))
   }

   getLanguages(name:any){
    return this.http.get<any>("https://api.github.com/repos/mojombo/"+name+"/languages")
    .pipe(map((res:any)=>{
         return res;
    }))
   }

}
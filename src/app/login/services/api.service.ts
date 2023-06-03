import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {

    public userTypeLoad:string = "";

    public dataFromApi: any;
    

    constructor(
        private _router: Router,
         private http: HttpClient
         ) {
        this.loadLocalStorage();
        console.log("Service runing");
     }
    
  

  public saveLocalStorage(userType:string): void{
        localStorage.setItem('userType', JSON.stringify(userType));
    }
    
   public loadLocalStorage():void{
    if(!localStorage.getItem('userType')){
        this._router.navigate(['login']);
        return;
    } 
    
    this.userTypeLoad = JSON.parse(localStorage.getItem('userType')!);
    
    if(this.userTypeLoad.length === 0)return;
      this.loadInfo();
    }

    loadInfo(): Observable<any[]> {
        return this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts");
      }

}
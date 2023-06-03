import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular';



  public dashboardAdmin:boolean = false;
  public dashboardUSer: boolean = false;

  
  submitLogin(user:string, password:string){

    console.log("starting login");

    if(user === "admin" && password === "1234"){
       this.dashboardAdmin = true;
    }
    if(user === "user" && password === "1234"){
      this.dashboardUSer = true;
   }

  }


}

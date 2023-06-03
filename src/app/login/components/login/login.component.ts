import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";

  constructor(
    private _apiService: ApiService,
    private _router: Router,
  ) { }


  ngOnInit(): void {
    
  }



  onSubmit() {
    // Perform login logic here
    if (this.username === 'admin' && this.password === '1234') {
      console.log('Login admin successful');
      this._apiService.saveLocalStorage("admin");

      this._router.navigate(["dashboard-admin"]);
      return;
    } 

    if (this.username === 'user' && this.password === '1234'){
      console.log('Login user successful');
      this._apiService.saveLocalStorage("user");
      this._router.navigate(["dashboard-user"]);
      return;
    }

    else{
      console.log('Invalid credentials');
      this._router.navigate(["dashboard-error"]);
      return;
    }
  }


  /*1 - Create Login.
2 - Create 2 differents dashboard components(for users "/dashboard-user" and admin "/dashboard-admin" ).
3 - When you login try to show the dashboard taking the role. 
    - If you are user and you write /dashboard-admin redirect to landing and show Forbbiden message.
4 - create a service to get information coming from this API https://jsonplaceholder.typicode.com/posts

5 - Display the data in admin/user dashboard using the design below

 jose.valenzuela@innovasolutions.com

*/ 


}

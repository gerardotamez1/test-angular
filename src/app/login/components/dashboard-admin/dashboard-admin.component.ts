import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {


  dataForAdmin:any;
  constructor(
    private _apiService: ApiService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    const userType = localStorage.getItem('userType');
    if(userType === '"user"'){
      console.log("is a user");
      this._router.navigate(['dashboard-error']);
    } else{
      this._apiService.loadInfo().subscribe(data => {
        this.dataForAdmin = data;
      });
    }

 
   
  }

 

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  dataForUser:any;
  constructor(
    private _apiService: ApiService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    const userType = localStorage.getItem('userType');
    if(userType === '"admin"'){
      this._router.navigate(['dashboard-error']);
      return;
  } 
    this._apiService.loadInfo().subscribe(data => {
      this.dataForUser = data;
    });
  }
}
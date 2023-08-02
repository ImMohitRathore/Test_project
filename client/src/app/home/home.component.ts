import { Component } from '@angular/core';
import { ApiService } from '../services/ApiServices';
import { CookieService } from 'ngx-cookie-service';

import {Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // isUserCheck
 
  UserData : any
  departments :any = [];
  departmentName!: string;
  Dep_id!: string;
  constructor(private apiService: ApiService, private cookieService: CookieService ,private router: Router ) { }

  ngOnInit() {
    let data = localStorage.getItem('UserData');
    this.UserData = JSON.parse(data as string);
    console.log("dddd" ,this.UserData);
    this.fetchDepartments()
    
    
  }

  logout(){
    this.cookieService.deleteAll()
    this.router.navigate(['/login'])
  }

  fetchDepartments() {
    this.apiService.getData('/api/department/getData').subscribe((departments) => {
        this.departments = departments.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    this.apiService.postData( '/api/department/add', { name: this.departmentName , Dep_id  :this.Dep_id }  ).subscribe(
      (response) => {
        console.log(response);
        this.departmentName = ''; // Clear the input field after successful submission
        this.fetchDepartments(); // Refresh the department list after adding a new department
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

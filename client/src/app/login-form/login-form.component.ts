import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ApiService } from '../services/ApiServices';
import { CookieService } from 'ngx-cookie-service';
import {Router } from '@angular/router'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm!: FormGroup; // Add definite assignment assertion

  constructor(private router : Router ,private formBuilder: FormBuilder ,private apiService : ApiService  ,private cookieService: CookieService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
   
  }

  onSubmit() {
    // if (this.loginForm.invalid) {
    //   return;
    // }


    this.apiService.putData('/api/login' ,this.loginForm.value ).subscribe((res)=>{
      console.log("ssss" ,res);
      if(res.status ){
        this.router.navigate(['/'])
        this.cookieService.set('token', res.data.token)
        
      }
        alert(res.message)
      
      // alert(res.message)
    // res.status ?  this.ToastService.success(res.message , 'success') : this.ToastService.error(res.message) 
  })


    // Perform login logic here
    // You can access the form values using this.loginForm.value
  }
}

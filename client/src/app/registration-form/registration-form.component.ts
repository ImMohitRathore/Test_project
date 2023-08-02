import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/ApiServices';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService
import {Router } from '@angular/router'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder ,private router : Router,private apiService : ApiService  ,private ToastService: ToastrService) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

  

    console.log("ddd" ,this.registrationForm.value);
    

// return 
    this.apiService.postData('/api/signup' ,this.registrationForm.value ).subscribe((res)=>{
        console.log("ssss" ,res);
        alert(res.message)
        if(res.status){

          this.router.navigate(['/login'])
        }
      // res.status ?  this.ToastService.success(res.message , 'success') : this.ToastService.error(res.message) 
    })

    // Perform registration logic here
  }
}

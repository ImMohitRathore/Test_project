import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  ,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { LoginFormComponent } from './login-form/login-form.component';
import { ToastrModule } from 'ngx-toastr'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // Import NoopAnimationsModule
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginFormComponent,
    RegistrationFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-center', // Set the position to top-center
        preventDuplicates: true, // Prevent duplicate toast messages
        closeButton: true, // Show close button on toasts
        timeOut: 300000, // Set the duration to 3 seconds
        extendedTimeOut: 100000, // Set the extended duration to 1 second
        progressBar: true, // Show progress bar
        progressAnimation: 'decreasing', // Set progress animation to decreasing
        toastClass: 'toast-transparent' // Set custom CSS class for the toast
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

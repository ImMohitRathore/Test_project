import { Injectable } from '@angular/core';
import { ApiService } from './ApiServices';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService, private cookieService: CookieService) {}

  isLoggedIn(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const token = this.cookieService.get('token');
      if (!token) {
        resolve(false);
      } else {
        const payload = {
          token: token
        };
        this.apiService.putData('/api/isUserCheck', payload).subscribe(
          (res) => {
            console.log("Response:", res);
            if (res.status) {
              localStorage.setItem('UserData', JSON.stringify(res.data));
            }
            resolve(res.status);
          },
          (error) => {
            console.error("API Error:", error);
            resolve(false);
          }
        );
      }
    });
  }
}
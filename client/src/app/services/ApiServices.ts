import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//   private apiUrl = 'http://cloud.wiusic.com';
  private apiUrl = environment.liveUrl;

  constructor(private http: HttpClient) { }

  getData(url:String): Observable<any> {
    return this.http.get(`${this.apiUrl}${url}`);
  }


  
  putData(url:String , payload :any): Observable<any> {
    return this.http.put(`${this.apiUrl}${url}` , payload);
  }


  
  postData(url:String , payload :any): Observable<any> {
     var  query = {}
    
    
    return this.http.post(`${this.apiUrl}${url}` , payload , query )
  }
}

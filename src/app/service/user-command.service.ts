import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class UserCommandService {

  url :String =  "http://localhost:3000/api/v1/" ;
  
  constructor(private http : HttpClient ,private auth:LoginService) { }

  Create(command : any) : Observable<any>{
    console.log("UserComm Service Create") ;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+this.auth.getToken()});
    let options = { headers: headers };
    return this.http.post(this.url+"usercommand" , command , options) ;
  }

  Read(){

  }

  readAll(){

  }
}

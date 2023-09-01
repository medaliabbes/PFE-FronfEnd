import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url : string = "http://localhost:3000/api/v1/" ;
  Logged : Boolean = false ;
  accessToken : String = "" ;
  
  loggedInEvent = new EventEmitter<Boolean>() ;

  constructor(private httpclient : HttpClient ) { }

  login(email :string , password : string) : Observable<any>
  {
     return this.httpclient.post(this.url+'login' , {
      "email"    : email,
      "password" : password
     }) ;
  }

  IsLogged() : Boolean
  {
    return this.Logged ;
  }

  setLogged(b : Boolean) 
  {
    
    this.loggedInEvent.emit(b) ;
    
    this.Logged = b ;
  }

  setToken(token : String){
    this.accessToken = token ;
  }

  getToken() : String{
    return this.accessToken ;
  }
 

}

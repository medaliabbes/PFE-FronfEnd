import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url :String =  "http://localhost:3000/api/v1/" ;

  constructor(private http : HttpClient , private auth : LoginService) { 

  }

  getListOfUsers() :Observable<User[]>{
    let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'JWT '+this.auth.getToken()});
    let options = { headers: headers };
    return this.http.get<User[]>(this.url + 'users' , options) ;
  }

  Create(uname :String, uemail:String , 
    upassword:String , upermissionlevel:any) : Observable<any>
  {
    let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'JWT '+this.auth.getToken()});
    let options = { headers: headers };
    let user = {email :uemail , name : uname, password : upassword 
      , permissionlevel : upermissionlevel} ;
    console.log(user);
      return this.http.post(this.url + 'users' , user , options) ;
  }

  Get(id : String) : Observable<User>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+this.auth.getToken()});
      let options = { headers: headers };
    return this.http.get<User>(this.url + 'users/'+id , options) ;
  }

  Delete(id  : String)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+this.auth.getToken()});
      let options = { headers: headers };
    return this.http.delete(this.url + 'users/'+id , options) ;
  }
}

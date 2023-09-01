import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,EMPTY } from 'rxjs';
import { LoginService } from './login.service';
import { Device } from './model/device';
import { Zone } from './model/zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  url : String =  "http://localhost:3000/api/v1/" ;
  constructor(private http : HttpClient , private auth : LoginService) { }

  getListOfZones() : Observable<Zone[]>{
    console.log("token :" , this.auth.getToken()) ;
    if(this.auth.IsLogged())
    {
      console.log("logged in ") ;
        let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT '+this.auth.getToken()});
        let options = { headers: headers };
        return this.http.get<Zone[]>(this.url + 'zones' , options) ; 
    }
    console.log("not logged in" );
    return EMPTY ;
  }

  getZoneListOfDevices(zoneid : String) : Observable<Device[]>
  {
      let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+this.auth.getToken()});
      let options = { headers: headers };
      return this.http.get<Device[]>(this.url + 'zones/'+zoneid+'/devices' , options) ; 
  }
  
  getZoneById(id : String) : Observable<Zone>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+this.auth.getToken()});
      let options = { headers: headers };
    return this.http.get<Zone>(this.url+'zones/'+id , options) ;
  }

  create(ZoneName : String, ZoneLocation : String)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+this.auth.getToken()});
      let options = { headers: headers };
      let zone = {name : ZoneName , location : ZoneLocation} ;
    return this.http.post(this.url +'zones', zone, options , )
  }

  delete(id : String){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+this.auth.getToken()});
      let options = { headers: headers };
    return this.http.delete(this.url+'zones/'+id , options) ;
  }

  update(id : String)
  {
    
  }
}

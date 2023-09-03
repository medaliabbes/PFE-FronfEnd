import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { Device } from '../model/device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private auth : LoginService , private http : HttpClient) { }

  Url : string = "http://localhost:3000/api/v1/" ;

  Create(mydev : Device) :Observable<Device>{

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT '+this.auth.getToken()});
    let options = { headers: headers };
    return this.http.post<Device>(this.Url+"devices" , mydev , options) ;
  }

  delete(){

  }

  getDevice(){

  }

  getListOfDevices(){

  }

}

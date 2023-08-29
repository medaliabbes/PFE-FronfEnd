import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true ;
  email    : any = "";
  password : any = "" ; 
  userNotFound = false ;
  constructor(private loginservice : LoginService , private router:Router){}

  login()
  {
    console.log("login" ,this.email) ;
    this.loginservice.login(this.email , this.password).subscribe( data =>{
      console.log(data.accessToken) ;
      if(data.message == "success")
      {
        this.loginservice.setLogged(true) ;
        this.loginservice.setToken(data.accessToken) ;
        this.router.navigate(['/' , 'zones']);
      }
      else{
        
      }
      
    } , err => {
        console.log("error login :" ,err) ;
        this.userNotFound = true ;
    }) ;
  }

  getErrorMessage() : String{
    return "User dosn't exist" ;
  }
}

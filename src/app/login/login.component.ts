import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email    : any = "";
  password : any = "" ; 

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
        console.log("error login") ;
      }
      
    })
  }
}

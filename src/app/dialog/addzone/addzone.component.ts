import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ZoneService } from 'src/app/zone.service';

@Component({
  selector: 'app-addzone',
  templateUrl: './addzone.component.html',
  styleUrls: ['./addzone.component.css']
})
export class AddzoneComponent {


  name : String |undefined ;
  location : String |undefined ;

  constructor(private _dialogRef : MatDialogRef<AddzoneComponent> 
              , private zoneservice : ZoneService ){}

  addNewZone(){
    console.log(`name :${this.name} , location : ${this.location}`) ;
    if(this.name && this.location)
    {
      //add a spiner or progress bar becaause adding zone take too match tile
      this.zoneservice.create(this.name , this.location).subscribe(data=>{
        console.log("data:" , data) ;
        this._dialogRef.close(true) ;
      } , err =>{
        console.error(err.status) ;
      }) ;
    }
  }

  cancel()
  {
    this._dialogRef.close(false) ;
  }
}

import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { Device } from 'src/app/model/device';
import { DevicesService } from 'src/app/service/devices.service';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css']
})
export class AdddeviceComponent {


  constructor(private _dialogRef : MatDialogRef<AdddeviceComponent>,
              @Inject(MAT_DIALOG_DATA) data: { zonettnId: String , zoneid :String} 
    ){
      this.zonettnid = data.zonettnId ;
      this.zoneid    = data.zoneid ;
    } 
  
  newDevice = {} as Device ;
  zonettnid : String = "" ;
  zoneid : String = "" ;
  name : String = "" ;
  eui  : String = "" ;
  join : String = "" ;
  mode : String = "" ;
  key  : String = "" ;

  addNewDevice(){
    //console.log(name) ;
    //console.log(this.zonettnid) ;

    this.newDevice.name = this.name  ;
    this.newDevice.appkey = this.key ;
    this.newDevice.eui   = this.eui  ;
    this.newDevice.join  = this.join ;
    this.newDevice.mode  = this.mode ; 
    this.newDevice.ttnid = "eui-"+this.eui ;
    this.newDevice.appid = this.zonettnid ;
    this.newDevice.zoneid = this.zoneid ;
    this._dialogRef.close(this.newDevice) ;
    //this._dialogRef.close(true) ;
  }

  cancel(){
    this._dialogRef.close(false) ;
  }

}

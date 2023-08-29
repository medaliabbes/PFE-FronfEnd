import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../model/device';
import { Zone } from '../model/zone';
import { ZoneService } from '../zone.service';


@Component({
  selector: 'app-zonedetails',
  templateUrl: './zonedetails.component.html',
  styleUrls: ['./zonedetails.component.css']
})
export class ZonedetailsComponent implements OnInit{

  id : any ;
  myzone : Zone |undefined;
  devices : Device[] | undefined ;
  constructor(private activatedrouter:ActivatedRoute , private zoneservice : ZoneService){}
  
  ngOnInit(): void {
    this.id = this.activatedrouter.snapshot.paramMap.get('id') ;
    this.zoneservice.getZoneById(this.id).subscribe(data => {
    this.myzone = data ; 
     }) ;
   
     this.zoneservice.getZoneListOfDevices(this.id) .subscribe(data => {
      this.devices = data ;
      console.log('devices :' , this.devices[0]) ;
     });
     
  }

  
}

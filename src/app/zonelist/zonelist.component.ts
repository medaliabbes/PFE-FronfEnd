import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { Zone } from '../model/zone';
import { ZoneService } from '../zone.service';

@Component({
  selector: 'app-zonelist',
  templateUrl: './zonelist.component.html',
  styleUrls: ['./zonelist.component.css']
})
export class ZonelistComponent implements OnInit{
  

  constructor(private ZoneService : ZoneService ,private router:Router){}

  myzones : Zone[] | undefined ;
  ngOnInit(): void {
    console.log("ZonelistComponent ngOnInit") ;
     this.ZoneService.getListOfZones().subscribe( data => {
      console.log("ZoneService Get Subscribe") ;
      console.log(data) ;
      this.myzones = data ;
     })
  }

  getZone(id : String){
    
    const zoneURL = "/zones/"+id.toString() ;
    console.log("getZone() :",zoneURL) ;
    this.router.navigateByUrl(zoneURL);
  }


}

import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Device } from '../model/device';
import { Zone } from '../model/zone';
import { UserCommandService } from '../service/user-command.service';
import { ZoneService } from '../zone.service';


@Component({
  selector: 'app-zonedetails',
  templateUrl: './zonedetails.component.html',
  styleUrls: ['./zonedetails.component.css']
})
export class ZonedetailsComponent implements OnInit{

  @Output() RefreshDevicesList: Observable<void> | undefined;

  ListOfDevices : Array<Device> | undefined;
  
  pins : String[] = ["off" ,"off" ,"off" ,"off" ] ;

  displayedColumns: string[] = ["name", "mode","state","action" ] ;

  dataSource!: MatTableDataSource<Device> ;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id : any ;
  myzone : Zone |undefined;
  devices : Device[] | undefined ;

  constructor(private activatedrouter:ActivatedRoute , 
              private zoneservice : ZoneService , 
              private userCommandService : UserCommandService){}
  
  ngOnInit(): void {
    this.id = this.activatedrouter.snapshot.paramMap.get('id') ;
    this.zoneservice.getZoneById(this.id).subscribe(data => {
    this.myzone = data ; 
     }) ;
   
     this.getListOfDevices() ;
     this.RefreshDevicesList?.subscribe( () => {
      this.getListOfDevices() ;
     })
     
  }


  getListOfDevices(){
    this.zoneservice.getZoneListOfDevices(this.id) .subscribe(data => {
      this.devices = data ;
      this.ListOfDevices = data ;
      this.dataSource = new MatTableDataSource(this.ListOfDevices) ;
      this.dataSource.sort = this.sort ;
      this.dataSource.paginator = this.paginator ;
     });
  }

  DeleteDevice(id : String){

  }

  RowClicked(){

  }
  
  sendOnCommand(id : String){
    console.log("on :" ,id) ;
    this.userCommandService.Create({deviceid:id,command :"on"}).subscribe( data =>{
      console.log("command send") ;
    } , err => {
      console.error("error" , err) ;
    })
  }

  sendOffCommand(id : String){
    console.log("off :" ,id) ;
    this.userCommandService.Create({deviceid:id,command :"off"}).subscribe( data =>{
      console.log("command send") ;
    } , err => {
      console.error("error" , err) ;
    }) ;
  }

  sendCommand(id :String , Pin : number){
    if(this.pins[Pin] === "on")
    {
      this.pins[Pin] = "off" ;
    }
    else{
      this.pins[Pin] = "on" ;
    }
    
    this.userCommandService.Create({deviceid:id,command :this.pins , pin : Pin}).subscribe( data =>{
      console.log("command send") ;
    } , err => {
      console.error("error" , err) ;
    }) ;

   
    
  }


}

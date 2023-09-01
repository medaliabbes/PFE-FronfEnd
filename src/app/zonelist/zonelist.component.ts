import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from  '@angular/router';
import { Zone } from '../model/zone';
import { ZoneService } from '../zone.service';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { catchError, Observable, throwError } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AdddeviceComponent } from '../dialog/adddevice/adddevice.component';
import { AddzoneComponent } from '../dialog/addzone/addzone.component';
import { ConfirmComponent } from '../dialog/confirm/confirm.component';

@Component({
  selector: 'app-zonelist',
  templateUrl: './zonelist.component.html',
  styleUrls: ['./zonelist.component.css']
})
export class ZonelistComponent implements OnInit{
  
  @Output() RefreshDevicesList: Observable<void> | undefined;

  ListOfZones : Array<Zone> | undefined;
  
  
  displayedColumns: string[] = [ "name", "location","ttnid"
  ,"userid"  ,"action" ] ;
  dataSource!: MatTableDataSource<Zone> ;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  clickedRows = new Set<Zone>();

  constructor(private _dialog : MatDialog ,private ZoneService : ZoneService ,private router:Router){}

  myzones : Zone[] | undefined ;
  ngOnInit(): void {
    console.log("ZonelistComponent ngOnInit") ;
    this.getListOfZones() ;
    this.RefreshDevicesList?.subscribe(() =>{
      this.getListOfZones() ;
    })
  }

  moseon = false ; 

  getListOfZones()
  {
      this.ZoneService.getListOfZones().subscribe( data => {
      this.ListOfZones = data ;
      this.dataSource = new MatTableDataSource(this.ListOfZones) ;
      this.dataSource.sort = this.sort ;
      this.dataSource.paginator = this.paginator ;
      
     }) ;
  }

  getZone(id : String){
    
    const zoneURL = "/zones/"+id.toString() ;
    console.log("getZone() :",zoneURL) ;
    this.router.navigateByUrl(zoneURL);
  }

  openAddZoneDialog()
  {
      
      const dialogref = this._dialog.open(AddzoneComponent) ;
      dialogref.afterClosed().subscribe({ next : (val:any) =>{
        if(val === true)
        {
          this.getListOfZones() ;
        }
      }})
  }

  select(id : string){
    console.log("ele selected :" , id);
  }


  hover(){
    this.moseon = true ;
  }

  leave(){
    this.moseon = false ;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  DeleteZone(id : String , name : String) {

    const dialogref = this._dialog.open(ConfirmComponent , {data : {zonename : name}}) ;
    dialogref.afterClosed().subscribe( data => {
      if(data == true){
        this.ZoneService.delete(id).subscribe(data=> {
          console.log("Delete Zone : ",data) ;
          this.getListOfZones() ;
        });
      }
    }) ;
    
  }

  EditZone(id : String) {

  }
}

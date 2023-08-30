import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-zonelist',
  templateUrl: './zonelist.component.html',
  styleUrls: ['./zonelist.component.css']
})
export class ZonelistComponent implements OnInit{
  
  @Input() RefreshDevicesList: Observable<void> | undefined;

  ListOfZones : Array<Zone> | undefined;
  
  
  displayedColumns: string[] = ["_id", "location","name","ttnid"
  ,"userid" ,"__v"  ] ;
  dataSource!: MatTableDataSource<Zone> ;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ZoneService : ZoneService ,private router:Router){}

  myzones : Zone[] | undefined ;
  ngOnInit(): void {
    console.log("ZonelistComponent ngOnInit") ;
    this.getListOfZones() ;
    this.RefreshDevicesList?.subscribe(() =>{
      this.getListOfZones() ;
    })
  }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  DeleteZone(id : String) {

  }

}

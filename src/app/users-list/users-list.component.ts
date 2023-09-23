import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UsersService } from '../service/users.service';
import { MatTableModule} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit{

  @Output() RefreshDevicesList: Observable<void> | undefined;

  ListOfUsers : Array<User> | undefined;
  
  
  displayedColumns: string[] = [ "name", "email" , "action"] ;

  dataSource!: MatTableDataSource<User> ;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private userService : UsersService){

  }

  ngOnInit(): void {
    this.getListOfUsers() ;
    this.RefreshDevicesList?.subscribe(() =>{
      this.getListOfUsers() ;
    }) ;
  }


  getListOfUsers()
  {
      this.userService.getListOfUsers().subscribe( data => {
      this.ListOfUsers = data ;
      this.dataSource = new MatTableDataSource(this.ListOfUsers) ;
      this.dataSource.sort = this.sort ;
      this.dataSource.paginator = this.paginator ;
      
     }) ;
  }


  addUser()
  {

    let perm = {
      zones        : { Read : 0 ,Write :0},
      devices      : { Read : 0 ,Write :1},
      users        : { Read : 0 ,Write :1},
      alerts       : { Read : 0 ,Write :1},
      schedulers   : { Read : 0 ,Write :1},
      userCommands : { Read : 0 ,Write :0}
    };
  
    this.userService.Create("hammali" , "ali@gmail.com" , 'azerty1253' , perm).subscribe(
      data =>{
        console.log(data) ;
      }
    );
  }
}

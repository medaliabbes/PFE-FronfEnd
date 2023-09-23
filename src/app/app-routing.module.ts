
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ZonedetailsComponent } from './zonedetails/zonedetails.component';
import { ZonelistComponent } from './zonelist/zonelist.component';

const routes: Routes = [
  { path : 'login' , component : LoginComponent} ,
  { path : 'zones' , component : ZonelistComponent } ,
  { path : 'zones/:id' , component : ZonedetailsComponent} ,
  { path : 'users' , component : UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

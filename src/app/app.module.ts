import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ZonelistComponent } from './zonelist/zonelist.component';
import { ZonedetailsComponent } from './zonedetails/zonedetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatDividerModule} from '@angular/material/divider'; 
import { MatTableModule } from '@angular/material/table' ;
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import { AdddeviceComponent } from './dialog/adddevice/adddevice.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddzoneComponent } from './dialog/addzone/addzone.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ZonelistComponent,
    ZonedetailsComponent,
    SidebarComponent,
    AdddeviceComponent,
    AddzoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule ,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 

export class AppModule { }

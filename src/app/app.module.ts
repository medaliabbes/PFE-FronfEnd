import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ZonelistComponent } from './zonelist/zonelist.component';
import { ZonedetailsComponent } from './zonedetails/zonedetails.component';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ZonelistComponent,
    ZonedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 

export class AppModule { }

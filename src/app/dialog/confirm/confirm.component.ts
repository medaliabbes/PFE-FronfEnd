import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddzoneComponent } from '../addzone/addzone.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  zoneName : String ;
  constructor(private _dialogRef : MatDialogRef<AddzoneComponent> , 
    @Inject(MAT_DIALOG_DATA) data: { zonename: String }){
      this.zoneName = data.zonename ;
    }

  confirm(){
    this._dialogRef.close(true) ;
  }
  cancel(){
    this._dialogRef.close(false) ;
  }
}

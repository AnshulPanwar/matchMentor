import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Component, Input, OnInit, ViewEncapsulation, OnDestroy, SecurityContext } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser/';
import { GlobalState } from '../../global.state';

@Component({
  selector: 'am3-profile-dialog',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef <ProfileComponent>,
    public elementRef: ElementRef,
    private snackBar: MatSnackBar,
    private domSanitizer: DomSanitizer,
    private globatState: GlobalState,
  ) {}



  ngOnInit() {
 
  }



  /**
   * Close the dialog using the reference
   */
  closeDialog(): void {
    this.dialogRef.close();
  }


}

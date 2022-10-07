import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from '../dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.scss']
})
export class ImageListItemComponent implements OnInit {

  @Input() image: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig={
      panelClass:'image-details-dialog',
      data:{
        image:this.image,
      }
    }

    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

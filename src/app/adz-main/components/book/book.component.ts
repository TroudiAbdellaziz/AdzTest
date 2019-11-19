import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, SimpleChange } from '@angular/core';
import { DataService } from '../../shared/data.service'
import {MatDialog, MatDialogConfig} from "@angular/material";
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialogContent} from '@angular/material';

@Component({
  selector: 'adz-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  inputs: ['book']
})
export class BookComponent implements OnInit {
  public book: any;
  public longText: boolean=false;
  public oldText: String;
  constructor(private dataService: DataService,
              private dialog: MatDialog) { }

  ngOnInit() {

  }
  // when the book is passed to the component, manipulate the data to make it more convenient to the card. ( title length, number of showen authors)
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes['book']) {
      if (this.book.volumeInfo.authors) {
        this.book.volumeInfo.changedAuthors = this.book.volumeInfo.authors.length > 2 ? [this.book.volumeInfo.authors[0], this.book.volumeInfo.authors[1]+" and others."] : this.book.volumeInfo.authors
      }
      if (this.book.volumeInfo.title.length>70) {
        this.longText = true;        
      }
    }
  }
//show the hidden title if it was ommited because it was long
  showTitle(){
    this.longText=false;
  }
// open popup and inject data to the popup
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data=this.book;
    dialogConfig.maxWidth=600;
    dialogConfig.minWidth=400;
    this.dialog.open(DialogComponent, dialogConfig);
}
}

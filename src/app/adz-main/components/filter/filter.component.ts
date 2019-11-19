import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'adz-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  inputs: ['books']
})
export class FilterComponent implements OnInit {
  public books: Array<any> = [];
  public userLang: String;
  constructor(private route: Router,
    private dataService: DataService,
    private translate: TranslateService) {
    //get the prefered language
    this.userLang = localStorage.getItem('userLang') ? localStorage.getItem('userLang') : navigator.language.substring(0, 2);
  }

  ngOnInit() {
  }
  // filter the data with author and/or the category
  filter(author: string, category: string) {
    this.dataService.ulterData({ "author": author, "category": category });

  }
  //select a book, send "null" in case the user has chosen "none" to reset the selection
  select(bookName: any) {
    if (!bookName) {
      this.dataService.selectBook(null);
    }
    this.dataService.selectBook(bookName);
  }
  // change the language to french
  changeToFr() {
    this.userLang = 'fr';
    localStorage.setItem('userLang', 'fr');
    this.translate.setDefaultLang('fr');
  }
  // change the language to english
  changeToEn() {
    this.userLang = 'en';
    localStorage.setItem('userLang', 'en');
    this.translate.setDefaultLang('en');
  }
}

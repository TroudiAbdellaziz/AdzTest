import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL = "https://www.googleapis.com/books/v1/volumes?q=";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();
  constructor(public http: HttpClient) { }

  getData(key: String, page: String) {

    return this.http.get<any>(URL + key + page);
  }
  ulterData(object: any) {
    this.http.get<any>(URL + "+inauthor:" + object["author"] + "+subject:" + object["category"])
      .toPromise()
      .then(res => {
        this.change.emit(res);
      })

  }
  selectBook(name: string) {
    this.select.emit(name);
  }

}

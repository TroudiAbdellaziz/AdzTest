import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL = "https://www.googleapis.com/books/v1/volumes?q=";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //change : event related to filtering with author and category
  //select : event related to book selection
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();
  constructor(public http: HttpClient) { }
  //get data from API
  getData(key: String, page: String) {
    return this.http.get<any>(URL + key + page);
  }
  // Filter data with athor and category
  ulterData(object: any) {
    this.http.get<any>(URL + "+inauthor:" + object["author"] + "+subject:" + object["category"])
      .toPromise()
      .then(res => {
        this.change.emit(res);
      })

  }
  // emit the event of book selection to the adzresult component
  selectBook(name: string) {
    this.select.emit(name);
  }

}

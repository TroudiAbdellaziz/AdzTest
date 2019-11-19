import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'adz-adzresult',
  templateUrl: './adzresult.component.html',
  styleUrls: ['./adzresult.component.css']
})
export class AdzresultComponent implements OnInit {
  private subscription: Subscription;
  public isCalled: Boolean = false;
  public selectedBooks: Array<any> = [];
  public books: Array<any> = [];
  public length: any;
  public selection: Boolean = false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService) {
    let self = this;
    if (!this.isCalled) {

      this.subscription = this.router.events.subscribe(route => {

        self.dataService.getData(self.route.snapshot.params['text'], self.route.snapshot.params['page'])
          .toPromise()
          .then((res) => {
            self.books = res.items;
            self.length = res.totalItems;
            self.isCalled = true;
          })

      });
    }
  }

  ngOnInit() {
    let self = this;
    this.dataService.change.subscribe(object => {
      this.selection = false;
      self.books = object.items;
      self.length = object.totalItems;
    })
    this.dataService.select.subscribe(name => {
      if (name) {
        self.selectedBooks = self.books.filter(book => book.volumeInfo.title == name);
        this.selection = true;
      }
      else {
        this.selection = false;
      }
    })
  }
  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
  pageEvent($event) {
    let self = this;
    this.dataService.getData(this.route.snapshot.params['text'], $event.pageIndex + 1)
      .toPromise()
      .then((res) => {
        self.books = res.items;
        self.isCalled = true;
      })
  }
}
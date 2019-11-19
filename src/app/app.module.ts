import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import {AdzMainModule} from './adz-main/adz-main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdzMainModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

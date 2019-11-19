import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

import { FormsModule , ReactiveFormsModule } from '@angular/forms'; 

import { AdzMainRoutingModule } from './adz-main-routing.module';
import { AdzresultComponent } from './pages/adzresult/adzresult.component';
import { AdzsearchComponent } from './pages/adzsearch/adzsearch.component';
import { BookComponent } from './components/book/book.component';
import { FilterComponent } from './components/filter/filter.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AdzMainRoutingModule,
    MatSliderModule,
    MatInputModule,MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,FormsModule,
    TranslateModule
  ],
  declarations: [AdzresultComponent, AdzsearchComponent, BookComponent, FilterComponent, DialogComponent],
  exports: [
    AdzresultComponent, AdzsearchComponent
  ],  entryComponents: [DialogComponent]

})
export class AdzMainModule { }

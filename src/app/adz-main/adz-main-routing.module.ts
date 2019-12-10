import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdzresultComponent} from './pages/adzresult/adzresult.component';
import {AdzsearchComponent} from './pages/adzsearch/adzsearch.component';
const routes: Routes = [
  {path: '', component: AdzresultComponent },
  {path: 'results/books/1', component: AdzresultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdzMainRoutingModule { }

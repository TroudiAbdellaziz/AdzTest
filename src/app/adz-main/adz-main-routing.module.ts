import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdzresultComponent} from './pages/adzresult/adzresult.component';
import {AdzsearchComponent} from './pages/adzsearch/adzsearch.component';
const routes: Routes = [
  {path: '', component: AdzsearchComponent },
  {path: 'results/:text/:page', component: AdzresultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdzMainRoutingModule { }

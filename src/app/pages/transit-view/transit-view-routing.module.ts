import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransitViewPage } from './transit-view.page';

const routes: Routes = [
  {
    path: '',
    component: TransitViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransitViewPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCapturedPage } from './view-captured.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCapturedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCapturedPageRoutingModule {}

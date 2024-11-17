import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanvasCapturePage } from './canvas-capture.page';

const routes: Routes = [
  {
    path: '',
    component: CanvasCapturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanvasCapturePageRoutingModule {}

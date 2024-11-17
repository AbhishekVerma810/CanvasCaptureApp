import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanvasCapturePageRoutingModule } from './canvas-capture-routing.module';

import { CanvasCapturePage } from './canvas-capture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanvasCapturePageRoutingModule
  ],
  declarations: [CanvasCapturePage]
})
export class CanvasCapturePageModule {}

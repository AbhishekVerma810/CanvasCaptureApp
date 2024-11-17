import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCapturedPageRoutingModule } from './view-captured-routing.module';

import { ViewCapturedPage } from './view-captured.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCapturedPageRoutingModule
  ],
  declarations: [ViewCapturedPage]
})
export class ViewCapturedPageModule {}

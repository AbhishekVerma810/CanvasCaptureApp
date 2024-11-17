import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransitViewPageRoutingModule } from './transit-view-routing.module';

import { TransitViewPage } from './transit-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransitViewPageRoutingModule
  ],
  declarations: [TransitViewPage]
})
export class TransitViewPageModule {}

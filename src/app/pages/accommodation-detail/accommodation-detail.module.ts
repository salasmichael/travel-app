import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccommodationDetailPageRoutingModule } from './accommodation-detail-routing.module';

import { AccommodationDetailPage } from './accommodation-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccommodationDetailPageRoutingModule
  ],
  declarations: [AccommodationDetailPage]
})
export class AccommodationDetailPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccommodationDetailPageRoutingModule } from './accommodation-detail-routing.module';

import { AccommodationDetailPage } from './accommodation-detail.page';
import { ComponentModule } from "../../components/component.module";

@NgModule({
    declarations: [AccommodationDetailPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccommodationDetailPageRoutingModule,
        ComponentModule
    ]
})
export class AccommodationDetailPageModule {}

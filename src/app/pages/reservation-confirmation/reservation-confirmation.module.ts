import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationConfirmationPageRoutingModule } from './reservation-confirmation-routing.module';

import { ReservationConfirmationPage } from './reservation-confirmation.page';
import { ComponentModule } from "../../components/component.module";

@NgModule({
    declarations: [ReservationConfirmationPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReservationConfirmationPageRoutingModule,
        ComponentModule
    ]
})
export class ReservationConfirmationPageModule {}

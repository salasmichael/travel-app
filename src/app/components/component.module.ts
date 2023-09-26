import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AccommodationComponent } from './accommodation/accommodation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AccommodationComponent
  ],
  imports: [
    CommonModule, 
    IonicModule,
    FormsModule,
  ],
  exports:[
    HeaderComponent,
    AccommodationComponent
  ]
})
export class ComponentModule { }

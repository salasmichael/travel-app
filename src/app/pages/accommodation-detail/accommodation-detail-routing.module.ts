import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccommodationDetailPage } from './accommodation-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AccommodationDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccommodationDetailPageRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-accommodation-detail',
  templateUrl: './accommodation-detail.page.html',
  styleUrls: ['./accommodation-detail.page.scss'],
})
export class AccommodationDetailPage implements OnInit {
  info:any;
  constructor(private travelService:TravelService,
              private navController:NavController) { }

  ngOnInit() {
    this.getInfo();
  }
   getInfo(){
    this.info= this.travelService.getInfoAccommodation();
    if(!this.info){
      this.navController.back();
    }
   }

   goToreservation(){
    this.navController.navigateForward("/reservation-confirmation");
   }

}

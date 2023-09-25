import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public loaded = false;
  customActionSheetOptions = {
    header: 'Destinos que te gustaria visitar',
    subHeader: 'Selecciona el destino',
  };

  constructor(private travelService:TravelService,
              private navController:NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  }

  getAccommodations(id:number){
    this.travelService.getAccommodations(id)

  }

  detail(){
    this.navController.navigateForward('/accommodation-detail')
  }

}

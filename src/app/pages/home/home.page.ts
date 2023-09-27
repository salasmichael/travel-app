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
  public accommodations: any[] = [];
  public destinarions: any[] = [];
  idDestinationDefault:number = 1;

  customActionSheetOptions = {
    header: 'Destinos que te gustaria visitar',
    subHeader: 'Selecciona el destino',
  };

  constructor(private travelService:TravelService,
              private navController:NavController) { }

  ngOnInit() {
      this.getDestinations();
      this.getAccommodations(this.idDestinationDefault)
  }

  getDestinations(){
    this.destinarions = this.travelService.getDestinations()
  }

  getAccommodations(id:number){
    this.loaded = false;
    setTimeout(() => {
      this.accommodations = this.travelService.getAccommodations(id);
      this.loaded = true;
    }, 2000);
  }

  detail(data:any){
    this.travelService.setInfoAccommodation(data);
    this.navController.navigateForward('/accommodation-detail')
  }

  handleChange(ev:any){
    const id = ev.detail.value;
    this.getAccommodations(id);
  }

}

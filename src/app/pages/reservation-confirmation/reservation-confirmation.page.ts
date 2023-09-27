import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-reservation-confirmation',
  templateUrl: './reservation-confirmation.page.html',
  styleUrls: ['./reservation-confirmation.page.scss'],
})
export class ReservationConfirmationPage implements OnInit {
  info:any;
  handlerMessage = '';
  reservationNum:number = 0;
  constructor(private travelService:TravelService,
              private navController:NavController,
              private alertController: AlertController) { }

  ngOnInit() {
    this.getInfo();
    this.reservationNum = Math.trunc(Math.random()*100000);
  }
   getInfo(){
    this.info= this.travelService.getInfoAccommodation();
    if(!this.info){
      this.navController.back();
    }
   }

   async reservation(){

    const alert = await this.alertController.create({
      header: 'Reservación creada con exito!',
      mode: 'ios',
      buttons: [
        {
        text: 'OK',
        role: 'confirm',
        },
      ],
    });
  
    await alert.present();
  
    const { role } = await alert.onDidDismiss();
  
    if(role==='confirm'){
      this.navController.navigateRoot("/home");
    }
      

  }
   async cancel(){
    
    const alert = await this.alertController.create({
      header: '¿Deseas cancelar la reserva?',
      mode: 'ios',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
        },
        {
        text: 'SI',
        role: 'confirm',
        },
      ],
    });
  
    await alert.present();
  
    const { role } = await alert.onDidDismiss();
  
    if(role==='confirm'){
      this.navController.navigateRoot("/home");
    }

   }
}

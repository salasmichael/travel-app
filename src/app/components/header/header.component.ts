import { Component, Input } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  handlerMessage = '';
  @Input() pageTitle: string = '';
  @Input() backButton: boolean = false;
  @Input() logoutbtn: boolean = false;

  constructor(private navController: NavController,
    private alertController: AlertController) { }


async logout() {

    const alert = await this.alertController.create({
    header: 'Deseas cerrar sesión?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          this.handlerMessage = 'Canceled';
        },
      },
      {
      text: 'OK',
      role: 'confirm',
        handler: () => {
          this.handlerMessage = 'Confirmed';
        },
      },
    ],
});

  await alert.present();

  const { role } = await alert.onDidDismiss();

  if(role==='confirm'){
    this.navController.navigateRoot(['/login']);
  }

}


}

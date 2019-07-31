import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private navCtrl: NavController, public alertController: AlertController) { }
  

  ngOnInit() {
  }

  gotoAbout(){
    this.navCtrl.navigateForward('/about');
  }
  gotoLanguage(){
    this.navCtrl.navigateForward('/language')
  }
  gotoGithub(){
    window.open("https://github.com/karorogunso/ProjectEMC",'_system', 'location=yes');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the AddAmbassadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-ambassador',
  templateUrl: 'add-ambassador.html',
})
export class AddAmbassadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAmbassadorPage');
  }

  addAmbassador(){
    this.navCtrl.pop();
    this.presentToast();

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'The New Ambassador   was added successfully',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();

}

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{BrandsPage} from '../brands/brands'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // this.navCtrl.setRoot('TabsPage'); 
  }

login(email,password) {
  console.log("First Time");
  
    this.goToBrandsPage(); 
    console.log("Second Time");
    //this.navCtrl.setRoot('TabsPage');
   
}

      goToBrandsPage() {
       this.navCtrl.push(BrandsPage,{
     });
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

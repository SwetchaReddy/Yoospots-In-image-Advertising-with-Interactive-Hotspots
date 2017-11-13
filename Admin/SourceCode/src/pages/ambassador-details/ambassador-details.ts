import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrandsDataProvider } from '../../providers/brands-data/brands-data'

/**
 * Generated class for the AmbassadorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ambassador-details',
  templateUrl: 'ambassador-details.html',
})
export class AmbassadorDetailsPage {
  ambassadors: any;
  ambassadorId: any;
  ambassadorInfo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public brandsProvider: BrandsDataProvider) {
    this.ambassadorId = navParams.get('details');
    this.ambassadors = [];
    this.ambassadorInfo = null;
    this.ambassadors = this.getAmbassadorDetails(this.ambassadorId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmbassadorDetailsPage');
  }


  getAmbassadorDetails(ambassadorId){
    this.brandsProvider.getBrandsData()
    .then(data => {
        this.ambassadors = data;
        this.ambassadors.forEach(element => {
            if (element.id == ambassadorId){
              this.ambassadorInfo = element;
            }
        });
    });
  }
  
}


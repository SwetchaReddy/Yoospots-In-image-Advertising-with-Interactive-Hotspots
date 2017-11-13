import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrandsDataProvider } from '../../providers/brands-data/brands-data'

/**
 * Generated class for the BrandDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brand-details',
  templateUrl: 'brand-details.html',
})
export class BrandDetailsPage {
  brandId:any;
  brands: any;
  brandInfo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public brandsProvider: BrandsDataProvider) {
    this.brandId = navParams.get('details');
    this.brands = [];
    this.brandInfo = null;
    console.log("Brand ID:", this.brandId);
    this.brands = this.getBrandDetails(this.brandId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandDetailsPage');
  }

  getBrandDetails(brandId){
    this.brandsProvider.getBrandsData()
    .then(data => {
        this.brands = data;
        this.brands.forEach(element => {
            if (element.id == brandId){
              this.brandInfo = element;
            }
        });
    });
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddAmbassadorPage } from '../add-ambassador/add-ambassador'
import { AmbassadorDetailsPage } from '../ambassador-details/ambassador-details'
import { BrandsDataProvider } from '../../providers/brands-data/brands-data'

/**
 * Generated class for the AmbassadorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ambassadors',
  templateUrl: 'ambassadors.html',
})
export class AmbassadorsPage {
  ambassadors: any;
  backAmbassadors:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public brandsProvider: BrandsDataProvider) {
    this.ambassadors = [];
    this.getAmbassadors();
    this.backAmbassadors =[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmbassadorsPage');
  }

  getAmbassadors(){
    this.brandsProvider.getBrandsData()
    .then(data => {
        this.ambassadors = data;
        this.backAmbassadors =data;
    });
  }

  onInputChange(value){
    if (value == ""){
      this.ambassadors = this.backAmbassadors;
    }
  }

  filterData(searchInput){
    console.log("Entered the method");
    console.log(searchInput);
    
this.ambassadors = this.ambassadors.filter((ambassador) => {
  console.log(searchInput);
 // console.log(resto.restaurant.cuisines);

  if (ambassador.name.indexOf(searchInput) !== -1) {
    return true;
  } else {
    return false;
  }

// return resto.restaurant.cuisines == searchInput;
 //return resto.restaurant.average_cost_for_two > searchInput;
 


  });
}


  addAmbassador(input) {
    console.log("In HERE", input);
    this.navCtrl.push(AddAmbassadorPage);
  }

  viewAmbassadorDetails(ambassadorId) {
    console.log("Ambassador ID is:",ambassadorId );
    this.navCtrl.push(AmbassadorDetailsPage,{
      details: ambassadorId
    });
  }


}

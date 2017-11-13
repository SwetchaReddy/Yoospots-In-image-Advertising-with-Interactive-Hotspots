import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBrandPage } from '../add-brand/add-brand'
import { BrandDetailsPage } from '../brand-details/brand-details'
import { BrandsDataProvider } from '../../providers/brands-data/brands-data'

/**
 * Generated class for the BrandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html',
})
export class BrandsPage {
  brands:any;
  previousId:any;
  backupBrands:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public brandsProvider: BrandsDataProvider) {
    this.brands = [];
    this.backupBrands=[];
    this.getBrands();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandsPage');
  }

  

  getBrands(){
    this.brandsProvider.getBrandsData()
    .then(data => {
        this.brands = data;
        this.backupBrands=data;
    });
  }

  onInputChange(value){
    if (value == ""){
      this.brands = this.backupBrands;
    }
  }

  filterData(searchInput){
    console.log("Entered the method");
    console.log(searchInput);
    
this.brands = this.brands.filter((brand) => {
  console.log(searchInput);
 // console.log(resto.restaurant.cuisines);

  if (brand.name.indexOf(searchInput) !== -1) {
    // return resto.restaurant.cuisines == searchInput;
    return true;
  } else {
    return false;
  }

// return resto.restaurant.cuisines == searchInput;
 //return resto.restaurant.average_cost_for_two > searchInput;
 


  });
}






  addBrand(input) {
    console.log("In HERE", input);
    this.navCtrl.push(AddBrandPage);
  }

  viewBrandDetails(brandId) {
    console.log("Brand ID is:",brandId );
    this.navCtrl.push(BrandDetailsPage,{
      details: brandId
    });
  }

}

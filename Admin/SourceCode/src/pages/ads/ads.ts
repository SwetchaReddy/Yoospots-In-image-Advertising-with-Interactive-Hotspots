import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { BrandsDataProvider } from '../../providers/brands-data/brands-data';
import { ImagePicker } from '@ionic-native/image-picker';



@IonicPage()
@Component({
  selector: 'page-ads',
  templateUrl: 'ads.html',
})
export class AdsPage {
  ads:any;
  options: any;
  selectedImage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public brandsProvider: BrandsDataProvider , private imagePicker: ImagePicker , private toastCtrl: ToastController) {
    this.ads = [];
    this.getAds();
    this.selectedImage = '';
    this.options = {
      maximumImagesCount: 1,
      width: 40,
      height: 40
    }
  }

  getAds(){
    console.log("Entered Ads.");
    this.brandsProvider.getBrandsData()
    .then(data => {
        this.ads = data;
        console.log(this.ads);
    });

    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdsPage');
  }

  addAds(abc){
    
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.selectedImage = results[i];
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }
  trainAds(abc){
    this.presentToast();

  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Ad was added successfully',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();

}
}

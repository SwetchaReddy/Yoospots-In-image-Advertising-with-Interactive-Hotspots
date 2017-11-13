import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { BrandsDataProvider } from '../../providers/brands-data/brands-data'

/**
 * Generated class for the AddBrandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-brand',
  templateUrl: 'add-brand.html',
})
export class AddBrandPage {
  options: any;
  selectedImage: any;
  selectedName: any;
  selectedAddress: any;
  selectedDesc: any;
  selectedAmbName: any;
  selectedAmbDesc: any;
  selectedAmbOccu: any;
  selectedAmbImgURL: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private imagePicker: ImagePicker, public brandsProvider: BrandsDataProvider,private toastCtrl: ToastController) {
    this.selectedImage = '';
    this.options = {
      maximumImagesCount: 1,
      width: 40,
      height: 40
    }
    this.selectedName = null;
    this.selectedAddress = null;
    this.selectedDesc = null;
    this.selectedAmbName = null;
    this.selectedAmbDesc = null;
    this.selectedAmbOccu = null;
    this.selectedAmbImgURL = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBrandPage');
  }

  addBrandLogo(abc){
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.selectedImage = results[i];
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });

  }

  addBrand(){
    let objectToAdd = {};
    objectToAdd['name'] = this.selectedName;
    objectToAdd['imgURL'] = "assets/logoImgs/logo9.png";
    objectToAdd['description'] = this.selectedDesc;
    objectToAdd['address'] = this.selectedAddress;
    objectToAdd['ambassador'] = this.selectedAmbName;
    objectToAdd['amb_desc'] = this.selectedAmbDesc;
    objectToAdd['amb_occup'] = this.selectedAmbOccu;
    objectToAdd['amb_imgURL'] = "assets/logoImgs/logo10.png";

    let result = this.brandsProvider.saveBrand(objectToAdd);
    if (result.status == true) {
      this.presentToast();
      //if this show message success
      console.log("YEAH SAVED");
    }
    else {
      console.log("NOT SAVED");      
      //Show message failure try again.
    }
    this.navCtrl.pop();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'The new Brand  '+this.selectedName +'  was added successfully',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();

}


}

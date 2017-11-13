import { Headers, Http, RequestOptions } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { File } from '@ionic-native/file';


/*
  Generated class for the BrandsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BrandsDataProvider {
  persistentData: any;
  data: any;
  apiURL: any;
  pushArray:any;
  GetAllAmbassadors:any;
  trainAmbassdors:any;
  AddAmabassadors:any;
  AddLogos:any;
  TrainLogo:any;
  GetLogos:any;
  GetAllAds:any;
  AddAds:any;
  id:any;
  GetLogoFrequency:any;
  GetLogoAvarageTime:any;
  constructor(public http: Http,private file: File) {
    console.log('Hello BrandsDataProvider Provider');
    this.data = null;
    this.GetAllAmbassadors = "ambessadors/GetAllAmbassadors";
    this.trainAmbassdors = "ambessadors/trainAmbassdors";
    this.AddAmabassadors = "ambessadors/AddAmabassadors";
    this.AddLogos = "logos/AddLogos";
    this.TrainLogo = "logos/TrainLogo";
    this.GetLogos = "logos/GetLogos";
    this.GetLogoFrequency = "logos/GetLogoFrequency";
    this.GetLogoAvarageTime = "logos/GetLogoAvarageTime";
    this.GetAllAds = "Ads/GetAllAds";
    this.AddAds = "Ads/AddAds";
    this.id = "Ads/id";
    
    
    
    
    
    
    this.pushArray = [];
    this.persistentData = this.getData();
  }

  getData() {
    console.log("API URL : " + this.GetAllAmbassadors);
    if (this.persistentData) {
      return Promise.resolve(this.persistentData);
    }

    let opt: RequestOptions;
    let myheaders = new Headers();
    // this.key='16a979934d2da2dbd8dd6cc21483e354';
    myheaders.append('Accept', 'application/json');
    // myheaders.append('user-key', this.key);
    opt = new RequestOptions({
      headers: myheaders
    });
    return new Promise(resolve => {
        this.http.get(this.apiURL,opt)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log("SERVICE RESPONSE :" + JSON.stringify(data));
          // this.data = data.appData;
          resolve(data.appData);
        });
    })
  }

  trainambassdors() {
    console.log("API URL : " + this.trainAmbassdors);
    if (this.persistentData) {
      return Promise.resolve(this.persistentData);
    }

    let opt: RequestOptions;
    let myheaders = new Headers();
    // this.key='16a979934d2da2dbd8dd6cc21483e354';
    myheaders.append('Accept', 'application/json');
    // myheaders.append('user-key', this.key);
    opt = new RequestOptions({
      headers: myheaders
    });
    return new Promise(resolve => {
        this.http.get(this.apiURL,opt)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log("SERVICE RESPONSE :" + JSON.stringify(data));
          // this.data = data.appData;
          resolve(data.appData);
        });
    })
  }

  addLogos() {
    console.log("API URL : " + this.AddLogos);
    if (this.persistentData) {
      return Promise.resolve(this.persistentData);
    }

    let opt: RequestOptions;
    let myheaders = new Headers();
    // this.key='16a979934d2da2dbd8dd6cc21483e354';
    myheaders.append('Accept', 'application/json');
    // myheaders.append('user-key', this.key);
    opt = new RequestOptions({
      headers: myheaders
    });
    return new Promise(resolve => {
        this.http.get(this.apiURL,opt)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log("SERVICE RESPONSE :" + JSON.stringify(data));
          // this.data = data.appData;
          resolve(data.appData);
        });
    })
  }

  addAmabassadors() {
    console.log("API URL : " + this.AddAmabassadors);
    if (this.persistentData) {
      return Promise.resolve(this.persistentData);
    }

    let opt: RequestOptions;
    let myheaders = new Headers();
    // this.key='16a979934d2da2dbd8dd6cc21483e354';
    myheaders.append('Accept', 'application/json');
    // myheaders.append('user-key', this.key);
    opt = new RequestOptions({
      headers: myheaders
    });
    return new Promise(resolve => {
        this.http.get(this.apiURL,opt)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log("SERVICE RESPONSE :" + JSON.stringify(data));
          // this.data = data.appData;
          resolve(data.appData);
        });
    })
  }

  trainLogo() {
    console.log("API URL : " + this.TrainLogo);
    if (this.persistentData) {
      return Promise.resolve(this.persistentData);
    }

    let opt: RequestOptions;
    let myheaders = new Headers();
    // this.key='16a979934d2da2dbd8dd6cc21483e354';
    myheaders.append('Accept', 'application/json');
    // myheaders.append('user-key', this.key);
    opt = new RequestOptions({
      headers: myheaders
    });
    return new Promise(resolve => {
        this.http.get(this.apiURL,opt)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log("SERVICE RESPONSE :" + JSON.stringify(data));
          // this.data = data.appData;
          resolve(data.appData);
        });
    })
  }

  getLogos() {
    console.log("API URL : " + this.GetLogos);
    if (this.persistentData) {
      return Promise.resolve(this.persistentData);
    }

    let opt: RequestOptions;
    let myheaders = new Headers();
    // this.key='16a979934d2da2dbd8dd6cc21483e354';
    myheaders.append('Accept', 'application/json');
    // myheaders.append('user-key', this.key);
    opt = new RequestOptions({
      headers: myheaders
    });
    return new Promise(resolve => {
        this.http.get(this.apiURL,opt)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log("SERVICE RESPONSE :" + JSON.stringify(data));
          // this.data = data.appData;
          resolve(data.appData);
        });
    })
  }

  getAllAds() {
    console.log("API URL : " + this.GetAllAds);
    if (this.persistentData) {
      return Promise.resolve(this.persistentData);
    }

    let opt: RequestOptions;
    let myheaders = new Headers();
    // this.key='16a979934d2da2dbd8dd6cc21483e354';
    myheaders.append('Accept', 'application/json');
    // myheaders.append('user-key', this.key);
    opt = new RequestOptions({
      headers: myheaders
    });
    return new Promise(resolve => {
        this.http.get(this.apiURL,opt)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log("SERVICE RESPONSE :" + JSON.stringify(data));
          // this.data = data.appData;
          resolve(data.appData);
        });
    })
  }


  addAds() {
    console.log("API URL : " + this.AddAds);
    if (this.persistentData) {
      return Promise.resolve(this.persistentData);
    }

    let opt: RequestOptions;
    let myheaders = new Headers();
    // this.key='16a979934d2da2dbd8dd6cc21483e354';
    myheaders.append('Accept', 'application/json');
    // myheaders.append('user-key', this.key);
    opt = new RequestOptions({
      headers: myheaders
    });
    return new Promise(resolve => {
        this.http.get(this.apiURL,opt)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log("SERVICE RESPONSE :" + JSON.stringify(data));
          // this.data = data.appData;
          resolve(data.appData);
        });
    })
  }

  idAddAds() {
    console.log("API URL : " + this.id);
    if (this.persistentData) {
      return Promise.resolve(this.persistentData);
    }

    let opt: RequestOptions;
    let myheaders = new Headers();
    // this.key='16a979934d2da2dbd8dd6cc21483e354';
    myheaders.append('Accept', 'application/json');
    // myheaders.append('user-key', this.key);
    opt = new RequestOptions({
      headers: myheaders
    });
    return new Promise(resolve => {
        this.http.get(this.apiURL,opt)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log("SERVICE RESPONSE :" + JSON.stringify(data));
          // this.data = data.appData;
          resolve(data.appData);
        });
    })
  }



  getBrandsData() {
    if (!this.persistentData) {
      this.persistentData = this.getData();    
    }
    return this.persistentData;
  }

  saveBrand(objectToSave) {
    console.log("API URL : " + JSON.stringify(objectToSave));

    if (this.persistentData) {
      this.persistentData.then((data) =>{
        data.push(objectToSave);
      });
    }

    return {
      "data": this.persistentData,
      "status": true
    };   
  }

}

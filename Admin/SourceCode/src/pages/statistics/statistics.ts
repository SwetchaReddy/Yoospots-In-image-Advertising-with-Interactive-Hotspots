import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrandsDataProvider } from '../../providers/brands-data/brands-data';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  ads:any;
  options: any;
  selectedImage: any;
  selectAd:any;
  constructor(public navCtrl: NavController, public brandsProvider: BrandsDataProvider ,public navParams: NavParams) {
    this.getAds();
    this.selectAd=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
  }
  getAds(){
    console.log("Entered Ads.");
    this.brandsProvider.getBrandsData()
    .then(data => {
        this.ads = data;
        console.log(this.ads);
    });

    
  }

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Frequency'},
    {data: [2, 4, 5, 6, 3, 2, 8], label: 'Average Time Spent'}
  ];
  public lineChartLabels:Array<any> = [2,5,8,9,13,16,19];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      // backgroundColor: 'rgba(148,159,177,0.2)',
      // borderColor: 'rgba(148,159,177,1)',
      // pointBackgroundColor: 'rgba(148,159,177,1)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      
     backgroundColor: 'rgba(255, 202, 51 ,0.2)',
      borderColor: 'rgba(255, 202, 51 ,1)',
      pointBackgroundColor: 'rgba(255, 202, 51  ,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 202, 51  ,0.8)'
    },
    { // dark grey
      // backgroundColor: 'rgba(77,83,96,0.2)',
      // borderColor: 'rgba(77,83,96,1)',
      // pointBackgroundColor: 'rgba(77,83,96,1)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(77,83,96,1)'
      
      backgroundColor: 'rgba( 51, 249, 255 ,0.2)',
      borderColor: 'rgba( 51, 249, 255 ,1)',
      pointBackgroundColor: 'rgba( 51, 249, 255 ,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba( 51, 249, 255 ,1)'
    },
    
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

}

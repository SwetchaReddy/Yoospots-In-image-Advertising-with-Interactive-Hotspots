import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { BrandsPage } from '../pages/brands/brands';
import { AddBrandPage } from '../pages/add-brand/add-brand';
import { BrandDetailsPage } from '../pages/brand-details/brand-details'

import { AmbassadorsPage } from '../pages/ambassadors/ambassadors';
import { AddAmbassadorPage } from '../pages/add-ambassador/add-ambassador';
import { AmbassadorDetailsPage } from '../pages/ambassador-details/ambassador-details'

import { StatisticsPage } from '../pages/statistics/statistics'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{LoginPage} from '../pages/login/login';
import { ImagePicker } from '@ionic-native/image-picker';
import { BrandsDataProvider } from '../providers/brands-data/brands-data';
import {Http, HttpModule} from '@angular/http';
import { AdsPage } from '../pages/ads/ads';
import { ChartsModule } from 'ng2-charts'
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
TabsPage,
    BrandsPage,
    AddBrandPage,
    BrandDetailsPage,
    AmbassadorsPage,
    AddAmbassadorPage,
    AmbassadorDetailsPage,
    StatisticsPage,
    AdsPage,LoginPage
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    ChartsModule,  
   
   // IonicModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    BrandsPage,
    AddBrandPage,
    BrandDetailsPage,
    AmbassadorsPage,
    AddAmbassadorPage,
    AmbassadorDetailsPage,
    StatisticsPage,AdsPage,LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BrandsDataProvider
  ]
})
export class AppModule {}

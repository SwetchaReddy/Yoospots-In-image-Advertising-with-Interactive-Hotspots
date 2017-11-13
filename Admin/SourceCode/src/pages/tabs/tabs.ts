import { Component } from '@angular/core';
import { AmbassadorsPage } from '../ambassadors/ambassadors';
import { BrandsPage } from '../brands/brands';
import { StatisticsPage } from '../statistics/statistics';
import { AdsPage } from '../ads/ads';
import{LoginPage} from '../login/login';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root= LoginPage;
  tab2Root = BrandsPage;
  tab3Root = AmbassadorsPage;
  tab4Root = AdsPage;
  tab5Root = StatisticsPage;
  
  constructor() {

  }
}

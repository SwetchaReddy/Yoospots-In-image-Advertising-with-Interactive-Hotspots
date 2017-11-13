/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,

} from 'react-native';
import HomeScreen from './screens/HomeScreen'
import AdsScreen from './screens/Ads'
import PumaAdsScreen from './screens/PumaAds'
import {
  StackNavigator,
} from 'react-navigation';
 import CanvasScreen from './screens/canvasImage'
export default App = StackNavigator({

  Home: {
     screen: HomeScreen, 
     navigationOptions: ({navigation}) => ({
    title:"Home",
    
  }),},
  Ads: { screen: AdsScreen,
    navigationOptions: ({navigation}) => ({
      title:"Ads",
    })
  },
  PumaAds: { screen: PumaAdsScreen,
    navigationOptions: ({navigation}) => ({
      title:"Ads",
    })
  },
  
});


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ListView
} from 'react-native';


const _width=Dimensions.get('window').width/2
const _height=Dimensions.get('window').height/4


const _widthAds=Dimensions.get('window').width
const _heightAds=Dimensions.get('window').height/3

export default class AdsScreen extends Component {
    constructor(props){
      super(props)
     
      const {navigate,state}=this.props
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows([]),
      };
      

      this.getAds=function(){
        fetch("localhost:8081//ads//"+state.params.id).then(function(response){
         this.setState({
          dataSource:ds.cloneWithRows(response)
         })
       })
      }
    }
    render() {
      return (
        <View style={styles.container}>
           <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => 
                <View>
                  <View style={styles.logo}>
                            <Image style={{width:_width,height:_height,alignItems:'center'}}
                              source={{uri:rowData.src}} 
                            />
                  </View>
                  <Text style={styles.text}>
                          {rowData.text}
                  </Text>
                </View>
              }
            />
            </View>
      )
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center",
      backgroundColor: '#4B836D',
      flexDirection:"column"
    },
    logo:{
       alignItems:'center',
       flex:1,
       
    },
    text:{
      alignItems:'center',
      flex:1,
      fontSize:18,
      color:"#ffffff",
      margin:8
    },
    ad:{
      flex:2,
     marginLeft:10,
     marginRight:10,
     marginBottom:5,
      borderColor:"#272F49",
      borderWidth:1
    },
    suggestions:{
      
    }
  });
  
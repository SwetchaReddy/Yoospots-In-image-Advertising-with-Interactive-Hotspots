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
  Alert
} from 'react-native';
import Canvas from 'react-native-canvas';

const _width=Dimensions.get('window').width
const _height=Dimensions.get('window').height/2

export default class HomeScreen extends Component {
  constructor(props){
    super(props)
   
  
    const {navigate}=this.props.navigation
    
    

    this.state={
      src1:require('./img/apple.jpg'),
      src2:require('./img/VIRAT.jpg'),
      src3:require('./img/pepsi.jpg'),
      src4:require('./img/federer.png'),
    }

    this.imageLoaded=function(img){
     fetch("localhost:8081//ambassadors//predictAmbassador").then(function(response){
        this.drawBox(img,response.x,response.y,response.xSize,response.ySize)
     })
     fetch("localhost:8081//logos//predictLogo").then(function(response){
      this.drawBox(img,response.x,response.y,response.xSize,response.ySize)
   })
    }.bind(this)
   
    this.drawBox()=function(img,start,end,height,width){
      canvas.width = width;
      canvas.height = height;
  
      const context = canvas.getContext('2d');
  
      image.src = img.src
      ctx.fillStyle = '#521ffd';
      image.addEventListener('load', () => {
       
        context.drawImage(image, start,end,height,width);
      });
    }

    this.onImagePress=function(e){
        navigate('Ads',e.src1);
    }.bind(this);
    
    
    handleCanvas = (canvas) => {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'purple';
      ctx.fillRect(0, 0, 100, 100);
      canvas.drawImage()
    }
  }
  
  static navigationOptions = {
    title: 'canvas',
  }

  render() {
    
    return (
      <View style={styles.container}>
      <ScrollView >
      <Text style={{alignSelf:'center',color:"#ff4f45",fontSize:25,fontFamily:"vedana",fontWeight:"bold"}} >
       Yoodle
        </Text>
        <Text style={styles.text} >
        Shah Rukh Khan is undoubtedly one of the biggest superstars in the country. The fans go into a frenzy whenever the actor appears in public. But looks like his superstar status became a reason for the troubles of Maharashtra MLC Jayant Patil.
        </Text>
        
        <TouchableHighlight style={{margin:10}} onPress={(e)=>this.onImagePress(e)}>
        <Image style={{width:_width,height:_height,position:'relative',resizeMode:'cover'}}
            source={this.state.src1}
            onLoadEnd={(e)=>this.imageLoaded(e)}
          />
        
        </TouchableHighlight>
        <Text style={styles.text}  >
        The 36-year-old Swiss, making his 15th appearance at the season-ending event for the top eight players in the world, won 6-4 7-6 (7-4) at the O2 Arena.
        
        American Sock was making his tournament debut, having qualified by winning the Paris Masters a week ago.
        
        Alexander Zverev beat Marin Cilic 4-6 6-3 6-4 in Sunday's second round-robin match in the Boris Becker Group.
        
        German third seed Zverev broke serve in the opening game with a deft volley and took the first set, but Croatian fifth seed Cilic grew stronger as the match progressed and looked set for victory at 3-1 up in the decider.
        The Pete Sampras Group starts on Monday, with Dominic Thiem taking on Grigor Dmitrov at 14:00 GMT followed by Rafael Nadal against David Goffin at 20:00. Jamie Murray and Bruno Soares begin their doubles campaign at 12:00.
        </Text>
        
        <TouchableHighlight style={{margin:10}} onPress={(e)=>this.onImagePress(e)}>
        <Image style={{width:_width,height:_height,position:'relative',resizeMode:'cover'}}
            source={this.state.src4}
            onLoadEnd={(e)=>this.imageLoaded(e)}
          >
         
          </Image>
          </TouchableHighlight>
      
        <Text style={styles.text} >
        These bogus Pepsi HIV warnings are just more incarnations of a long-running hoax that has falsely claimed that HIV infected blood has been added to various foodstuffs.

Back in 2004, an emailed warning claimed that a man had been caught placing HIV contaminated blood in ketchup dispensers at fast-food outlets. This hoax subsequently spawned several other ketchup or tomato sauce related variants in the years since.

And in, 2006, another series of hoax messages wrongly claimed that a child was diagnosed with AIDS after eating contaminated take away food prepared by an HIV positive cook who had cut his finger and bled while working in the kitchen.

More recently, other versions have falsely claimed that bananas, oranges, and canned fruit have been deliberately contaminated with HIV
        </Text>
        <TouchableHighlight style={{margin:10}} onPress={(e)=>this.onImagePress(e)}>
          <Image style={{width:_width,height:_height,position:'relative',resizeMode:'cover'}}
            source={this.state.src3} 
            onLoadEnd={(e)=>this.imageLoaded(e)}
          >
           
          </Image>
          </TouchableHighlight>
        <Text style={styles.text} >
        MS Dhoni's future, particularly as a member of the Indian team in the shortest format, has been discussed and debated at length especially during and after India's three-match T20I series against New Zealand. Former players like Ajit Agarkar, VVS Laxman and Aakash Chopra are of the opinion that Dhoni should make way for younger players in T20 cricket. Former India captain Sourav Ganguly advised the under-fire World Cup winning skipper Dhoni to approach the Twenty20 Internationals "differently". Agarkar and Laxman, recently raised questions about Dhoni's T20 future, creating a storm in the country's cricketing circles.
"His record in T20I is not that good compared to ODIs. Hope Kohli and team management will speak to him separately. He has immense ability. If he approaches T20Is differently, then he will be successful," said Ganguly.
Chasing 197 in second T20 versus New Zealand in Rajkot, India were struggling at 97 for four when Dhoni joined skipper Virat Kohli and found it difficult to get it going. Eventually India lost the match.
        </Text>
        <TouchableHighlight style={{margin:10}} onPress={(e)=>this.onImagePress(e)}>
        <Image style={{width:_width,height:_height,position:'relative',resizeMode:'cover'}}
            source={this.state.src2}
            onLoadEnd={(e)=>this.imageLoaded(e)}>
            </Image>
        </TouchableHighlight>
        <Text style={styles.text}  >
        "India won't play with three spinners, definitely not at the Eden Gardens as the pitch here is different. They will play with two spinners and now since they don't have Hardik Pandya they may have a different combination for the all-rounders slot."
        Ganguly hoped Sri Lanka would give India fight after their confidence-boosting 2-0 win over Pakistan in the Test series last month.
        "Of course India are the favourites. They are a much better side than Sri Lanka. Recently they won in Sri Lanka across all formats.
        "I hope it won't be a one-sided series. The recent (limited overs) series against New Zealand was competitive. Hope Sri Lanka will play well," he said.
        </Text>
       
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#4B836D',
  },
  text:{
    fontSize:18,
    alignItems: 'stretch',
    alignContent:"space-between",
    color:"#ffffff",
    margin:5
  }
  
});

var express = require('express')
var adsRouter = express.Router()

var MongoClient = require('mongodb').MongoClient;
var connectionString='mongodb://Shalin:12345@ds161049.mlab.com:61049/asetutorial10';   


adsRouter.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  
  var ads=[];
  // define the home page route
  adsRouter.get('/', function (req, res) {
    
  
    getAllAds(function(data){
     res.send(data)
    });
   
  })
  
  
  // define the about route
  adsRouter.get('/GetAdId',function (req, res) {
    res.send(ads.find((ad)=>ad._id==req.params.id));
  })
  
  adsRouter.post('/insertAd',Ad, function (req, res) {
    AddAd(Ad,function(data){res.send(data)});
  })
  
  adsRouter.post('/updateAd',Ad, function (req, res) {
    updateUser(Ad,function(data){res.send(data)});
  })
  
  adsRouter.post('/deleteAd',adID, function (req, res) {
    deleteUser(adId,function(data){res.send(data)});
  })
  
  var getAllAds=function (callback){
   MongoClient
   .connect(connectionString)
   .then(function(db) {
   db.collection("Ads").find({}).toArray().then(function(data){
       callback(data)
     })
    })
        
  }
  
  var AddAd=function(user,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Ads").insert(user).then(function(suc,err){
      if (err) {
        console.log('error while inserting Ad');
        callback(err)
      }
      else{
        console.log(suc);
        callback(suc)
      }
      })
     })
  }
  
  var updateAd=function(ad,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Ads").update({_id:ad._id},ad,{upsert: true}).then(function(data){
        callback(data)
      })
     })
         
  }
  
  var deleteAd=function(adId,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Ads").remove({_id:adId}).then(function(data){
        callback(data)
      })
     })
  }
  
  var deleteAd=function(adId,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Ads").remove({_id:adId}).then(function(data){
        callback(data)
      })
     })
  }


  adsRouter.get('/getFrequecy',Ads, function (req, res) {
   res.send( QueueAds("f",Ads))
  })


  adsRouter.get('/getAvarageTime',Ads, function (req, res) {
   res.send( QueueAds("t",Ads))
  })


  var QueueAdsByRegion=function(Ads,region){
    let newAds= Ads.filter(ad=> ad.country==region)
      return newAds
    }  
    
    var QueueAdsByFrequency=function(Ads){
      let newAds= Ads.sort((a,b)=> {
        if (a.click>b.click)
          return 1;
        if(a.click<b.click)
          return -1;
        return 0; 
      })
      return newAds
    }  
    
    var QueueAdsByPriority=function(Ads){
      let newAds= Ads.sort((a,b)=> {
        if (a.priority>b.priority)
          return 1;
        if(a.priority<b.priority)
          return -1;
        return 0 
      })
      return newAds
    } 
    
    var QueueAdsByLessTimeSpent=function(Ads){
      let newAds= Ads.sort((a,b)=> {
        if (a.avarageTimeSpent<b.avarageTimeSpent)
          return 1;
        if(a.avarageTimeSpent>b.avarageTimeSpent)
          return -1;
        return 0 
      })
      return newAds
    } 
    
    var QueueAdsByMoreTimeSpent=function(Ads){
      let newAds= Ads.sort((a,b)=> {
        if (a.avarageTimeSpent>b.avarageTimeSpent)
          return 1;
        if(a.avarageTimeSpent<b.avarageTimeSpent)
          return -1;
        return 0 
      })
      return newAds
    }
    
    var GenerateGraph=function(logoId,Ads){
      let  newAds=Ads.filter(ad=>ad.logoId==2)
      var yAxis=[];
      newAds.forEach(ad=>yAxis.push(ad.click));
    }
    
    var QueueAds=function(type,Ads){
          switch(type){
            case "r":QueueAdsByRegion(Ads);
            break;
            case "f":QueueAdsByFrequency(Ads);
            break;
            case "p":QueueAdsByPriority(Ads);
            break;
            case "lt":QueueAdsByLessTimeSpent(Ads);
            break;
            case "mt":QueueAdsByMoreTimeSpent(Ads);
            break;
            default :QueueAdsByFrequency(Ads);
            break;
          }
      }
    
  module.exports = adsRouter;
var express = require('express')
var logoRouter = express.Router()
var clarifaiApp=require('./APIs/clarifia')
var MongoClient = require('mongodb').MongoClient;
var connectionString='mongodb://Shalin:12345@ds161049.mlab.com:61049/asetutorial10';   
var vision=require('./APIs/googleVision');

logoRouter.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  
  var logos=[];
  // define the logo route
  logoRouter.get('/', function (req, res) {
    res.send('Logos Page')
    getAllLogos(function(data){
      logos= data;
    });
    console.log(logos);
   
  })
  
  
  // define the about route
  logoRouter.post('/GetLogoId',function (req, res) {
    res.send('id='+ req.params.id);
   console.log(users.find((logo)=>logo._id==req.params.id));
  })
  
  logoRouter.post('/insertLogo', function (req, res) {
    AddLogo(req.params.logo,function(data){
      res.send(data)
    });
  })
  
  logoRouter.post('/updateLogo', function (req, res) {
    updateLogo(req.params.logo,function(data){res.send(data)
    });
  })
  
  logoRouter.post('/deleteLogo', function (req, res) {
    deleteUser(req.params.logoId,function(data){
      res.send(data)
    });
  })
  
  logoRouter.post('/addModel',function(req,res){
    clarifaiApp.createModel(req.params.model,
      function(res){
        res.send(res)
      }
    );  
  })


  logoRouter.post('/trainModel', function (req, res) {
    clarifaiApp.TrainModel(req.params.model,
      function(res){
        res.send(res)
    });  
  
  })


  logoRouter.get('/addInputs', function (req, res) {
    clarifaiApp.AddInputs(
      req.params.inputs,
      function(res){
        res.send(res)
    })   
    res.send('Inputs added')
    })
  
  logoRouter.get('/predictModel', function (req, res) {
      clarifaiApp.Predict();  
      res.send('Model Predicted')
  })  
    

  var getAllLogos=function (callback){
   MongoClient
   .connect(connectionString)
   .then(function(db) {
   db.collection("Logos").find({}).toArray().then(function(data){
       callback(data)
     })
    })
  }
  
  var AddLogo=function(user,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Logos").insert(user).then(function(suc,err){
      if (err) {
        console.log('error while inserting logo');
        callback(err)
      }
      else{
        console.log(suc);
        callback(suc)
      }
      })
     })
  }
  
  var updateUser=function(user,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Logos").update({_id:user._id},user,{upsert: true}).then(function(data){
        callback(data)
      })
     })
         
  }
  
  var deleteUser=function(logoId,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Logos").remove({_id:logoId}).then(function(data){
        callback(data)
      })
     })
  }
  module.exports = logoRouter;
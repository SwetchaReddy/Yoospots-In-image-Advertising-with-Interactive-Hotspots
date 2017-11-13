var express = require('express')
var ambassadorRouter = express.Router()
var clarifaiApp=require('./APIs/clarifia')
var MongoClient = require('mongodb').MongoClient;
var connectionString='mongodb://Shalin:12345@ds161049.mlab.com:61049/asetutorial10';   
var vision=require('./APIs/googleVision');

ambassadorRouter.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  
  var ambassadors=[];
  // define the home page route
  ambassadorRouter.get('/', function (req, res) {
    res.send('Ambassadors Page')
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Persons").find({}).toArray().then(
      function(data){
        console.log(data);
      })
     })
  })
  
  ambassadorRouter.post('/insertPerson', function (req, res) {
    AddAmbassador(req.params.ambassador,
      function(data){
        res.send(data)
    });
  })
  
  ambassadorRouter.post('/addModel', function (req, res) {
    clarifaiApp.createModel(req.params.model,
      function(res){
        res.send(res)
      }
    );  
  })

  ambassadorRouter.post('/trainModel', function (req, res) {
    clarifaiApp.TrainModel(req.params.model,
      function(res){
        res.send(res)
    });  
  
  })


  ambassadorRouter.get('/addInputs', function (req, res) {
    clarifaiApp.AddInputs(
      req.params.inputs,
      function(res){
        res.send(res)
    })   
    res.send('Inputs added')
    })
  
    ambassadorRouter.get('/predictModel', function (req, res) {
        
      res.send(clarifaiApp.Predict())
      })  
    
  ambassadorRouter.get('/updatePerson', function (req, res) {
    updateAmbassador(req.body.ambassador,function(data){res.send(data)});
  })
  
  ambassadorRouter.get('/deletePerson', function (req, res) {
    deleteAmbassador(req.body.ambassador,function(data){res.send(data)});
  })
  
  var getAllAmbassadors=function (callback){
   MongoClient
   .connect(connectionString)
   .then(function(db) {
   db.collection("Persons").find({}).toArray().then(function(data){
       callback(data)
     })
    })
        
  }
  
  var AddAmbassador=function(Ambassador,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Persons").insert(Ambassador).then(function(suc,err){
      if (err) {
        console.log('error while inserting Ambassador');
        callback(err)
      }
      else{
        console.log(suc);
        callback(suc)
      }
      })
     })
  }
  
  var updateAmbassador=function(Ambassador,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Persons").update({_id:Ambassador._id},Ambassador,{upsert: true}).then(function(data){
        callback(data)
      })
     })
         
  }
  
  var deleteAmbassador=function(AmbassadorId,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Persons").remove({_id:AmbassadorId}).then(function(data){
        callback(data)
      })
     })
  }

 
  module.exports = ambassadorRouter;
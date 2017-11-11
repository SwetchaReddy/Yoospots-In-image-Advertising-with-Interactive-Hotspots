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
    res.send('Users Home Page')
  
    getAllUsers(function(usersData){
      users= usersData;
    });
    console.log(users);
  })
  
  
  // define the about route
  adsRouter.get('/GetUserId',function (req, res) {
    res.send('id='+ req.params.id);
   console.log(users.find((user)=>user._id==req.params.id));
  })
  
  adsRouter.get('/insertUser', function (req, res) {
    user={
          _id:2,
          name:'Sami',
          pass:'1234',
          email:'kevin@fan360.com',
          phNo:'8163288464',
          loggedIn:0,
          sessionId:'1'
        }
    AddUser(user,function(data){res.send(data)});
  })
  
  adsRouter.get('/updateUser', function (req, res) {
    user={
          _id:2,
          name:'Sami',
          pass:'12345',
          email:'newEmail@fan360.com',
          phNo:'8163288464',
          loggedIn:1,
          sessionId:'1'
        }
    updateUser(user,function(data){res.send(data)});
  })
  
  adsRouter.get('/deleteUser', function (req, res) {
    deleteUser(2,function(data){res.send(data)});
  })
  
  var getAllUsers=function (callback){
   MongoClient
   .connect(connectionString)
   .then(function(db) {
   db.collection("Users").find({}).toArray().then(function(data){
       callback(data)
     })
    })
        
  }
  
  var AddUser=function(user,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Users").insert(user).then(function(suc,err){
      if (err) {
        console.log('error while inserting user');
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
    db.collection("Users").update({_id:user._id},user,{upsert: true}).then(function(data){
        callback(data)
      })
     })
         
  }
  
  var deleteUser=function(userId,callback){
    MongoClient
    .connect(connectionString)
    .then(function(db) {
    db.collection("Users").remove({_id:userId}).then(function(data){
        callback(data)
      })
     })
  }
  
  module.exports = adsRouter;
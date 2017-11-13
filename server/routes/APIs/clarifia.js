 // instantiate a new Clarifai app passing in your api key.
 const app = new Clarifai.App({
  apiKey: "Your_Key"
 });


  app.AddInputs=function(inputs,callback){
    app.inputs.create(inputs).then(
      function(res){
        callback(res)
      },function(err){
        callback(res)
      })
  }
  
  // once inputs are created, create model by giving name and list of concepts
  app.createModel=function(model,concepts,callback) {
    app.models.create(
      model, concepts
    ).then(
      function(response) {
        callback(response)
      },
      function(err) {
        callback(err)
      }
    );
   
  }
  
  // after model is created, you can now train the model
  app.TrainModel =function(model,callback) {
    app.models.train(model).then(
      function(response) {
        callback(response)
      },
      function(err) {
        callback(err)
      }
    );
   
  }
  
  // after training the model, you can now use it to predict on other inputs
  app.Predict= function(modelName,image,callback) {
    app.models.predict(modelName,image).then(
      function(response) {
       callback(response);
      }, errorHandler
    );
  }
  
  function errorHandler(err) {
    console.error(err);
  }

  module.exports = app;
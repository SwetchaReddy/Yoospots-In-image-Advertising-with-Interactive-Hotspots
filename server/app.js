

const express = require('express')
const expApp = express()
const app = require('clarifai');


var ambessadors = require('./routes/ambessadors');
var logos = require('./routes/logos');
var ads = require('./routes/ads');



expApp.use('/ambessadors',ambessadors);
expApp.use('/logos',logos);
expApp.use('/ads',ads);

expApp.listen(8081, () => console.log('Example expApp listening on port 8081!'))
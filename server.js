const express = require('express');
const path = require('path');
let htmlRoutes = require('./app/routing/htmlRoutes');
let apiRoutes = require('./app/routing/apiRoutes');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function(){
    console.log('App listening on PORT '+PORT)
});
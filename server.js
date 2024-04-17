//untuk server
const express = require('express');
const bodyParser = require('body-parser');
const { listen } = require('express/lib/application');
const app = express();
const db = require('./database');

//parse application/json
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

//untuk panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () =>{
    console.log('server started on port');
});


const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectionInfo } = require('../config.js');
const postgresDB = require('./postgresDB.js');
const readWithPreferences = require('./helpers/readWithPreferences');
const fillRecipesPage = require('./helpers/fillRecipesPage');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//Routes
app.get('/',(req, res)=>{
  res.send('Test Response');
});
app.get('/fillRecipesPage', fillRecipesPage );
app.get('/readWithPreferences', readWithPreferences);

//Node Server
const NodePort = 8000;


app.listen(NodePort, ()=>{
  console.log('listening on NodePort ' + NodePort)
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const x = require('./mealPlanner');
const sequelize = require('./mysqlDB.js').db;
const createIngredient = require('./helpers/createIngredient');
const createStaple = require('./helpers/createStaple');


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync()
.then(()=>{
  console.log('Synced to DB');
})
.then(()=>{
  createIngredient({
  name: 'testIngredient' ,
  vegetarian: true ,
  staple: true,
  calories: 10 ,
  protein: 10 ,
  carb: 10 ,
  fat: 10
});
})
.then(()=>{
  createStaple({
  name: 'testStaple' ,
  vegetarian: false ,
  calories: 30 ,
  protein: 30 ,
  carb: 30 ,
  fat: 30
});
})


.catch(err => {
    console.error('Unable to sync to the database:', err);
  });


//Node Server
const NodePort = 8000;


//ROUTES
app.get('/', (req, res) => {
  res.send('Test Res ');
});

app.post('/createIngredient', (req, res)=>{
  const created = createIngredient(req.body);
  if(created) console.log('Created ' + req.body.name); //?
});



app.listen(NodePort);
console.log('listening on NodePort ' + NodePort);
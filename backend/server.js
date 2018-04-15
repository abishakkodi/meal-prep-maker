const express = require('express');
const app = express();
const x = require('./mealPlanner');
const sequelize = require('./mysqlDB.js').db;
const createIngredient = require('./helpers/createIngredient');

//SQL Database
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('testMealPrep', 'root', '', {
//   dialect: 'mysql',
//   host: 'localhost',
//   operatorsAliases: false
// });

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
.catch(err => {
    console.error('Unable to sync to the database:', err);
  });

createIngredient({
  Name: 'Chicken Breast' ,
  Vegetarian: false ,
  Calories: 150 ,
  Protein: 15 ,
  Carb: 0 ,
  Fat: 4
});

//Node Server
const NodePort = 8000;
app.get('/', (req, res) => {
  res.send('Test Res ');
});


app.listen(NodePort);
console.log('listening on NodePort ' + NodePort);
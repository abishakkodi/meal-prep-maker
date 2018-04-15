const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


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
.then(()=>{
  createIngredient({
  Name: 'Broccoli' ,
  Vegetarian: false ,
  Calories: 150 ,
  Protein: 15000 ,
  Carb: 0 ,
  Fat: 4
});
})

.catch(err => {
    console.error('Unable to sync to the database:', err);
  });


//Node Server
const NodePort = 8000;


// parameter middleware that will run before the next routes
app.param('name', function(req, res, next, name) {

    // check if the user with that name exists
    // do some validations
    // add -dude to the name
    var modified = name + '-dude';

    // save name to the request
    req.name = modified;

    next();
});

// http://localhost:8080/api/users/chris
app.get('/api/users/:name', function(req, res) {
    // the user was found and is available in req.user
    res.send('What is up ' + req.name + '!');
});





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
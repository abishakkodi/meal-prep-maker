
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectionInfo } = require('../config.js');
const mongoose = require('mongoose');
const postgresDB = require('./postgresDB.js');
const seedRecipes = require('./initDatabase.js');
const readRecipes = require('./helpers/mongodb/readRecipes');

mongoose.connect(connectionInfo);
mongoose.connection.once('open',()=>{
  console.log('Connected to mlab');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

seedRecipes();


//Routes
app.get('/',(req, res)=>{
  res.send('Test Response');
});

app.get('/readRecipes', readRecipes);

//Node Server
const NodePort = 8000;


app.listen(NodePort, ()=>{
  console.log('listening on NodePort ' + NodePort)
});

// const sequelize = require('./mysqlDB.js').db;
//Helper SQL Functions
// const createIngredient = require('./helpers/createIngredient');
// const createStaple = require('./helpers/createStaple');
// const createRecipe = require('./helpers/createRecipe');
// const readRecipes = require('./helpers/readRecipes');
// const onLoad = require('./helpers/onLoad')
// const initDatabase = require('./initDatabase');
// const mealPlanner = require('./mealPlanner');
// const reset = { force: false }; //

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// sequelize.sync(reset)
//   .then(() => {
//     console.log('Synced to DB');
//   })
//   .then(()=>{

//     initDatabase();

//   })
//   .then(() => {
//     createStaple({
//       name: 'testStaple',
//       vegetarian: false,
//       calories: 30,
//       protein: 30,
//       carb: 30,
//       fat: 30
//     });
//   })
//   .then(()=>{
//     for( let i = 0; i < 5; i++) {
//       createRecipe({
//       name: 'recipe ' + JSON.stringify(i),
//       calories: (i * 10),
//       description: 'some text',
//       steps: 'some text',
//       vegetarian: true,
//       pictureLink: 'some url',
//       recipeIngredients: [1*i,2*i,3*i],
//       category: 'breakfast'
//     });
//     }


//   })
//   .catch(err => {
//     console.error('Unable to sync to the database:', err);
//   });




//ROUTES
// app.get('/', (req, res) => {
//   onLoad();
//   res.send('Test Res ');
// });

// app.get('/readRecipes', (req, res) => {
//   readRecipes();
//   res.send(`
//         <h4>
//           Recipe Read and Sent
//         </h4>
//     `);
// });

// app.get('/mealPlanner', mealPlanner);

// app.get('/testResponse', (req, res)=> {
//   res.send({message: 'requestReceived'});
// })

// app.post('/createIngredient', (req, res) => {
//   const created = createIngredient(req.body);
//   if (created) console.log('Created ' + req.body.name); //?
// });

// app.post('/createRecipe', (req, res) => {
//   const created = createRecipe(req.body);
//   if (created) console.log('Created ' + req.body.name); //?
// });

// app.post('/createStaple', (req, res) => {
//   const created = createStaple(req.body);
//   if (created) console.log('Created ' + req.body.name); //?
// });



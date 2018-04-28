const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = require('./mysqlDB.js').db;

//Helper SQL Functions
const createIngredient = require('./helpers/createIngredient');
const createStaple = require('./helpers/createStaple');
const createRecipe = require('./helpers/createRecipe');
const readRecipes = require('./helpers/readRecipes');
const reset = { force: false }; //

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync(reset)
  .then(() => {
    console.log('Synced to DB');
  })
  .then(() => {
    createIngredient({
      name: 'testIngredient',
      vegetarian: true,
      staple: true,
      calories: 10,
      protein: 10,
      carb: 10,
      fat: 10
    });
  })
  .then(() => {
    createStaple({
      name: 'testStaple',
      vegetarian: false,
      calories: 30,
      protein: 30,
      carb: 30,
      fat: 30
    });
  })

  .then(()=>{
    for( let i = 0; i < 5; i++) {
      createRecipe({
      name: 'recipe ' + JSON.stringify(i),
      calories: (i * 10),
      description: 'some text',
      steps: 'some text',
      vegetarian: true,
      pictureLink: 'some url',
      recipeIngredients: [1*i,2*i,3*i],
      category: 'breakfast'
    });
    }


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

app.get('/readRecipes', (req, res) => {
  readRecipes();
  res.send(`
        <h4>
          Recipe Read and Sent
        </h4>
    `)
});

app.post('/createIngredient', (req, res) => {
  const created = createIngredient(req.body);
  if (created) console.log('Created ' + req.body.name); //?
});

app.post('/createRecipe', (req, res) => {
  const created = createRecipe(req.body);
  if (created) console.log('Created ' + req.body.name); //?
});

app.post('/createStaple', (req, res) => {
  const created = createStaple(req.body);
  if (created) console.log('Created ' + req.body.name); //?
});






app.listen(NodePort);
console.log('listening on NodePort ' + NodePort);
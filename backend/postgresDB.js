const Sequelize = require('sequelize');
const _ = require('lodash');
const Faker = require('faker');

const Connnection = new Sequelize(
    'mealprepdev',
    'avkodi',
    '', {
        dialect: 'postgres',
        host: 'localhost'
    }
);



const Recipe = Connnection.define('recipe', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    link: {
        type: Sequelize.STRING,
        allowNull: true
    },
    imageURL: {
        type: Sequelize.STRING,
        allowNull: true
    },
    multiplier: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    vegetarian: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    BLD: {
        type: Sequelize.STRING,
        allowNull: true
    }

});


const Ingredient = Connnection.define('ingredient', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    vegetarian: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    staple: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
});

const RecipeInstruction = Connnection.define('instruction', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    stepId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    step: {
      type: Sequelize.STRING,
      allowNull: true
    }
});

Recipe.hasMany(Ingredient);
Recipe.hasMany(RecipeInstruction);
Ingredient.belongsTo(Recipe);
RecipeInstruction.belongsTo(Recipe);

const instructionsArray = [0,1,2,3,4];

Connnection.sync({ force: true })
    .then(() => {
        console.log('\n\n\n POSTGRES CONNECTED');
    })
    .then(() => {
        _.times(5, () => {
            return Recipe.create({
                    name: Faker.name.firstName(),
                    vegetarian: Faker.random.boolean()
                })
                .then((recipe) => {
                  console.log('\n\n',recipe.name);
                  _.times(7, ()=>{
                    return recipe.createIngredient({
                        name: Faker.name.lastName(),
                        vegetarian: Faker.random.boolean()
                    });
                  });

                })
        })
    })
    .catch((err) => (console.log(err)));

module.exports = Connnection;
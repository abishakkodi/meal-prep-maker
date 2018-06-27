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
        allowNull: false
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    multiplier: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    vegetarian: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }

});

const Ingredients = Connnection.define('ProteinIngredient', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    vegetarian: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    staple: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
});

const RecipeInstructions = Connnection.define('instructions', {

});



Connnection.sync({ force: true })
    .then(() => {
        console.log('\n\n\n POSTGRES CONNECTED');
    })
    .then(()=>{

    });

module.exports = Connnection;
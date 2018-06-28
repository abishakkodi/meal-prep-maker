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



const ProteinRecipe = Connnection.define('proteinRecipe', {
    name: {
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
    },

    difficulty: {
        type: Sequelize.STRING,
        allowNull: true
    }

});

const CarbRecipe = Connnection.define('carbRecipe', {
    name: {
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
    },

    difficulty: {
        type: Sequelize.STRING,
        allowNull: true
    }

});

const VegetableRecipe = Connnection.define('vegetableRecipe', {
    name: {
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
    },

    difficulty: {
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

//Protein relationships
ProteinRecipe.hasMany(Ingredient);
ProteinRecipe.hasMany(RecipeInstruction);
Ingredient.belongsTo(ProteinRecipe);
RecipeInstruction.belongsTo(ProteinRecipe);

//Carb Relationships
Ingredient.belongsTo(CarbRecipe);
CarbRecipe.hasMany(Ingredient);
CarbRecipe.hasMany(RecipeInstruction);
RecipeInstruction.belongsTo(CarbRecipe);

//Vegetable Relationships
VegetableRecipe.hasMany(Ingredient);
VegetableRecipe.hasMany(RecipeInstruction);
Ingredient.belongsTo(VegetableRecipe);
RecipeInstruction.belongsTo(VegetableRecipe);


const instructionsArray = [0, 1, 2, 3, 4];

Connnection.sync({ force: true })
    .then(() => {
        console.log('\n\n\n POSTGRES CONNECTED');
    })

    .then(() => {
        _.times(7, () => {
            return ProteinRecipe.create({
                    name: Faker.name.firstName(),
                    vegetarian: Faker.random.boolean()
                })
                .then((recipe) => {
                    _.times(2, () => {
                        return recipe.createIngredient({
                            name: Faker.name.lastName(),
                            vegetarian: Faker.random.boolean()
                        });
                    });
                })
        })
    })
    .then(() => {
        _.times(7, () => {
            return CarbRecipe.create({
                    name: Faker.name.firstName(),
                    vegetarian: Faker.random.boolean()
                })
                .then((recipe) => {
                    _.times(2, () => {
                        return recipe.createIngredient({
                            name: Faker.name.lastName(),
                            vegetarian: Faker.random.boolean()
                        });
                    });
                })
        })
    })

    .then(() => {
        _.times(7, () => {
            return VegetableRecipe.create({
                    name: Faker.name.firstName(),
                    vegetarian: Faker.random.boolean()
                })
                .then((recipe) => {
                    _.times(2, () => {
                        return recipe.createIngredient({
                            name: Faker.name.lastName(),
                            vegetarian: Faker.random.boolean()
                        });
                    });
                })
        })
    })
    .catch((err) => (console.log('SYNC ERROR', err)));

module.exports = Connnection;
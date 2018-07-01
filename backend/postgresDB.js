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
        type: Sequelize.TEXT,
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


const instructionsArray = [0, 1, 2];

Connnection.sync({ force: true })
    .then(() => {
        console.log('\n\n\n POSTGRES CONNECTED');
    })

    .then(() => {
        _.times(3, () => {
            return ProteinRecipe.create({
                    name: `PROTEIN_RECIPE_FROM: ${Faker.name.firstName()}`,
                    vegetarian: Faker.random.boolean()
                })
                .then((recipe) => {
                    _.times(3, () => {
                        return recipe.createIngredient({
                            name: `PROTEIN_RECIPE_INGREDIENT_FROM :${recipe.name}`,
                            vegetarian: Faker.random.boolean()
                        });
                    });
                instructionsArray.forEach((item, index) => {
                      recipe.createInstruction({
                        name: recipe.dataValues.name,
                        stepId: index,
                        step: Faker.lorem.sentences()
                      })
                    })
                })
        })
    })
    .then(() => {
        _.times(7, () => {
            return CarbRecipe.create({
                    name: `CARB: ${Faker.name.firstName()}`,
                    vegetarian: Faker.random.boolean()
                })
                .then((recipe) => {
                    _.times(3, () => {
                        return recipe.createIngredient({
                            name: `INGREDIENT FROM :${recipe.name}`,
                            vegetarian: Faker.random.boolean()
                        });
                    });
                })
        })
    })

    .then(() => {
        _.times(7, () => {
            return VegetableRecipe.create({
                    name: `VEGETABLE: ${Faker.name.firstName()}`,
                    vegetarian: true
                })
                .then((recipe) => {
                    _.times(3, () => {
                        recipe.createIngredient({
                            name: `INGREDIENT FROM :${recipe.name}`,
                            vegetarian: true
                        });
                    });
                    instructionsArray.forEach((item, index) => {
                      recipe.createInstruction({
                        name: recipe.dataValues.name,
                        stepId: index,
                        step: Faker.lorem.sentences()
                      })
                    })
                })
        })
    })
    .catch((err) => (console.log('SYNC ERROR', err)));

module.exports = Connnection;
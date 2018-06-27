const Staples = require('../mysqlDB.js').Staples;

const createStaple = (stapleObj) => {
  Staples
  .findOrCreate(
  { where: stapleObj,
    defaults: stapleObj
  })

  .spread((Staple, created)=>{
    console.log('Staple CREATED?: ', created);
    return created;
  })

  .catch((err)=>{
    console.log('Staple Not built :', err );
  });
}

module.exports = createStaple;

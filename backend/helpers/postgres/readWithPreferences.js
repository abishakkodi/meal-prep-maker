const _ = require('lodash');

const readWithPreferences = (res, req) => {
  let initial = [];



}


/*

Do I get charged on reads or do I get charged on instance?

Need flowchart for retrieval

1. Check to see if request is vegetarian, basically cuts off a bunch of recipes

2. Check to see if there is a preference on breakfast/lunch/dinner recipes

3. Retrieve chopped list of recipes

4. Iterate through recipe list/find a sequelize function to add ingredients to recipe object

5. Filter recipe objects based on ingredients

6. Once final recipe list is made, use recipe ids to pull the instructions for recipes and add it to recipe object

7. Send array back to front end

8. Celebrate

. If less than x recipes remaining, sucks to suck but you are eating one thing for the week

*/
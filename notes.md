model debugging

-   changed names of all models and attributes in js files to camelCase. E.g. `player_a_id` --> `playerAId`. (I think this is best practice in js? https://sequelize.org/master/manual/naming-strategies.html)

I misunderstood Sequelize's associations:
-   `belongsTo` is one
-   `belongsToMany` is 2 or more. Typically, I don't think of 2 as many, but that's what it means. Therefore, I changed the associations in `models/index.js` to reflect this. 
-   A game belongs to "many" players (many being 2. I know, nonsensical!)

Wikipedia article:
https://en.wikipedia.org/wiki/Associative_entity

-   server giving "AssociationError" because through tables required. I added through tables to the models where needed: https://sequelize.org/master/manual/assocs.html#many-to-many-relationships
-   

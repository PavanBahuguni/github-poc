const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = new express();
const { makeExecutableSchema } = require('graphql-tools')

var args = process.argv.slice(2);


if(args[0] === 'object') {
  /**
  * This is for object schema.
  */
  const schema = require('./schema');
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));
} else {
  /**
  * Using string queries
  */
  const typeDefs = require('./schema-string');
  const resolvers = require('./resolvers-string');

  const schema = makeExecutableSchema({ 
    typeDefs,
    resolvers
  });

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));
}

app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
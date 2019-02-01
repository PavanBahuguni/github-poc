const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = new express();
const { buildSchema } = require('graphql');
/**
 * This is for object schema.
 */
// const schema = require('./schema');
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true,
// }));

/**
 * Using string queries
 */
const typeDefs = require('./schema-string');
const schema = buildSchema(typeDefs);
const resolvers = require('./resolvers-string');
console.log(resolvers);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(4000);
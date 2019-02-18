const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getUsers: [User]
    getUser(id: ID): User
  }
  type Mutation {
    createUser(name: String): User
  }
  type User {
    id: ID
    name: String
  }`;

const resolvers = require('./resolvers');
console.log(typeDefs);
console.log(resolvers);
const server = new ApolloServer({ typeDefs, resolvers});
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
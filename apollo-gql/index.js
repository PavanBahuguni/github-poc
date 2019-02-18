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
    "id of the user."
    id: ID
    "# name of the user."
    name: String
  }`;

const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers});
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
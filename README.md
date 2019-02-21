# github-poc

> A POC of graphql server frameworks listed below.

1. GraphQL.js and express-graphql
   To run express-graphql and graphql.js server use comand
   ```
    npm run express-gql
   ```
   express-graphql can take schema in two types as object and as string.
   By default the above command runs the server using string schema.
   To run using the object schema use the below command.
   ```
   npm run express-gql object
   ```

2. Apollo Server
   To run the Apollo GraphQL server use command.
   ```
   npm run apollo
   ```

3. Metaphysics: TODO

> How to try:
 
 Run the server using above commands, each of the modes will start graphiql client which can be accessed at.
 http://localhost:4000/graphql
 
 Sample Query:
 
 http://localhost:4000/graphql?query=%7B%0A%20%20getUsers%20%7B%0A%20%20%20%20id%2C%0A%20%20%20%20name%0A%20%20%7D%0A%7D
 
 > Use dataloader for batching and caching: TODO

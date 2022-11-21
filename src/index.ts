import express from "express"
import { ApolloServer } from "apollo-server-express"
import {PORT } from "./config"
import { resolvers, typeDefs } from "./data"

const server = new ApolloServer({ typeDefs, resolvers })

const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port: PORT }, () => {
    console.log(
      `Server is running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});

app.get("/", (req, res) => {
  console.log("Apollo GraphQL Express server is ready");
})
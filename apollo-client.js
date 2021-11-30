import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.URL_GRAPH,
    headers: {
      "x-hasura-admin-secret": process.env.ADMIN_SECRET,
      "x-request-id": process.env.REQUEST_ID,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;

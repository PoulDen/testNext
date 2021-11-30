import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_URL_GRAPH,
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET,
      "x-request-id": process.env.NEXT_PUBLIC_REQUEST_ID,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;

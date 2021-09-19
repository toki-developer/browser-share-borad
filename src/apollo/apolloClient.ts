import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

const wsLink = process.browser
  ? new WebSocketLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT.replace("https", "ws"),
      options: {
        reconnect: true,
        connectionParams: {
          headers: {},
        },
      },
    })
  : undefined;

export const apolloClient = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache(),
});

import { InMemoryCache, ApolloClient } from 'apollo-boost';
import {ApolloLink} from 'apollo-link';
import {AppRestLink} from "./RestLink";




export const client = new ApolloClient({
  link: ApolloLink.from([AppRestLink]), // https://www.apollographql.com/docs/link/links/rest/#example
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;

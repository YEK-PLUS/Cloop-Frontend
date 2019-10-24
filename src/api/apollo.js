import ApolloClient from 'apollo-boost';
import { getLocalStorage } from '../helper';
import 'cross-fetch/polyfill';

const client = new ApolloClient({
  uri: 'http://192.168.1.105:8080/graphql',
  headers: {
    authorization: getLocalStorage('UserToken'),
  },
});

export default client;

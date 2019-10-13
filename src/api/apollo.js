import ApolloClient from 'apollo-boost';
import 'cross-fetch/polyfill';

const client = new ApolloClient({
	uri: 'http://localhost:8080/graphql',
});

export default client
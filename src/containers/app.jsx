import React from 'react';
import { withRouter } from "react-router";
import { Route,Switch,Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApolloProvider } from '@apollo/react-hooks';

import { gql } from "apollo-boost";
import _ from 'lodash'
import {userActions} from '../state/actions';
import {ApolloClient} from '../api'

import Home from './home';
import Login from './login';

import {RestAPI} from '../api';
const mapStateToProps = (state) => ({
  logined: state.user.logined,
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}
class App extends React.Component {
	constructor(props) {
		super(props);
	}
  state = {
    logined:false
  }
  componentDidMount(){
    const {UserLogined} = this.props;
    RestAPI('/auth/token').then( (data)=> {
      const logined = !_.has(data,'error')
      UserLogined(logined)
    } );
  }
	login() {
    let response;
    if(!this.props.logined && this.props.location.pathname !== '/login') {
      response = <Redirect to="/login" />;
    }
    else if (!this.props.logined && this.props.location.pathname === '/login') {
      response = null;
    }
    else if (this.props.logined && this.props.location.pathname === '/login') {
      response = <Redirect to="/" />;
    }
    else {
      response = null
    }
    return (response);
	}
	render() {
		const {t,logined} = this.props;
		return (
			<ApolloProvider client={ApolloClient}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
        {this.login()}
			</ApolloProvider>
		);
	}
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    withTranslation('main')(App)
  )
);

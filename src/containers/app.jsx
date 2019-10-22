import React,{Fragment} from 'react';
import { withRouter } from "react-router";
import { Route,Switch,Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

import { gql } from "apollo-boost";
import _ from 'lodash'
import {userActions} from '../state/actions';
import {ApolloClient} from '../api'
import {getLocalStorage,delLocalStorage,GetMe} from '../helper'

import Home from './home';
import Login from './login';
import Loading from './loading';
import BirthdayPanel from './birthdayPanel.jsx';

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
    this.LoginRoute = this.LoginRoute.bind(this)
    this.SaveMe = this.SaveMe.bind(this)
	}
  state = {
    logined:false
  }
  componentDidMount(){
    const {UserLogined} = this.props;
    RestAPI('/auth/token').then( (data)=> {
      const logined = !_.has(data,'error')
      if(!logined){delLocalStorage('UserToken')}
      UserLogined(logined)
    } );
  }
	LoginRoute() {
    let response;
    if(!this.props.logined && this.props.location.pathname !== '/login') {
      response = <Redirect to="/login" />;
    }
    else if (this.props.logined && this.props.location.pathname === '/login') {
      response = <Redirect to="/" />;
    }
    else {
      response = null
    }
    return (response);
	}
  SaveMe(props){
    if(this.props.logined === true && getLocalStorage('UserToken')){
      const { data } = useQuery(GetMe);
      if(data){
        const {UserSave} = this.props;
        UserSave(data.me)
        return props.children
      }
    }
    return <Loading/>
  }
  render() {
		const {t,logined} = this.props;
    const {LoginRoute,SaveMe} = this
		return (
			<ApolloProvider client={ApolloClient}>
        <LoginRoute/>
        <Switch>
          <Route exact path="/login" component={Login} />
          <SaveMe>
            <Route exact path="/" component={Home} />
            <Route exact path="/birthday" component={BirthdayPanel} />
          </SaveMe>
        </Switch>
			</ApolloProvider>
		);
	}
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    withTranslation('main')(App)
  )
);

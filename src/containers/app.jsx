import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApolloProvider } from '@apollo/react-hooks';

import { gql } from "apollo-boost";

import {userActions} from '../state/actions';
import {ApolloClient} from '../api'

const mapStateToProps = (state) => ({
  logined: state.user.logined,
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
	}
	login(){
		const {UserLogined,logined} = this.props;
		let login = logined === true ? true:false
		UserLogined( !login );
	}
	checkLogined(){
		const {logined} = this.props;
		return logined === true ? 'giris yapildi' : (logined === false ? 'giris yapilamadi' : 'bekleniyor')
	}
	render() {
		const {t,logined} = this.props;
		return (
			<ApolloProvider client={ApolloClient}>
				<div className="w-full h-auto py-2 flex flex-col justify-center items-center bg-gray-500 text-white text-center text-4xl">
					{t('main.title')}
					<div onClick={this.login} className={`w-auto h-auto p-2 bg-red-500`}>
						{logined === true ? 'cikis yap' : 'giris yap'}
					</div>
					{this.checkLogined()}
				</div>
			</ApolloProvider>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('translations')(App));
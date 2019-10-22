import React,{useRef, useEffect,Component} from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import _ from 'lodash'

import {userActions} from '../state/actions';
import {DefaultNavbar} from '../components';
import MobileLauncher from './mobileLauncher'

const mapStateToProps = (state) => ({
  logined: state.user.logined,
  user: state.user.user
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

class Home extends Component {
	constructor(props) {
		super(props);
    this.LoadNavBar = this.LoadNavBar.bind(this)
	}
  LoadNavBar(){
    const {logined,user} = this.props;
    const NavBarSettigns = {};
    if(logined&&_.size(user) !== 0){
      NavBarSettigns.username =user.username
      NavBarSettigns.avatar = user.avatar.media
    }
    else{
      NavBarSettigns.username ='Loading'
      NavBarSettigns.avatar = `https://dummyimage.com/500x100/ffffff/000000.png&text=C-LOOP`
    }
    return <DefaultNavbar {...NavBarSettigns}/>

  }
	render() {
		const {t} = this.props;
    const {LoadNavBar} = this
		return (
      <div>
        <LoadNavBar/>
        <div className={`container-with-menu`}>
          <MobileLauncher/>
        </div>
      </div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('main')(Home));

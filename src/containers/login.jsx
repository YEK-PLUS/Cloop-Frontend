import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import {userActions} from '../state/actions';
import {RestAPI} from '../api';
import {setLocalStorage} from '../helper'
import {TwoInputRow,TwoInputCol,RoundedButton} from '../components';
const mapStateToProps = (state) => ({
  logined: state.user.logined,
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}
class LoginPage extends React.Component {
	constructor(props) {
		super(props);
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
	}
  state={
    loginFail:true
  }
  onChange(e){
    let a = {};
    a[event.target.name] = event.target.value
    this.setState(a);
  }
  onClick(e){
    if(
      this.state.login && this.state.login !== '',
      this.state.password && this.state.password !== ''
    ){
      RestAPI('/auth/login',{
        login:this.state.login,
        password:this.state.password
      }).then((data)=>{
        if(_.has(data,'token')){
          setLocalStorage('UserToken',data.token)
          const {UserLogined} = this.props;
          UserLogined();
          this.setState({loginFail:false})
          window.location.reload()
        }
        else{
          this.setState({loginFail:data.error})
        }
      })
    }
    else{
      this.setState({loginFail:'fill in the required fields'})
    }
  }
  checkFail(){
    const {t} = this.props;
    if(!this.state.loginFail){
      return null
    }
    else{
      if(this.state.loginFail === 'invalid password'){
        return (<div className={`text-center`}>{t('login:invalidPassword')}</div>)
      }
      else if (this.state.loginFail === 'user not found') {
        return (<div className={`text-center`}>{t('login:userNotFound')}</div>)
      }
      else if (this.state.loginFail === 'fill in the required fields') {
        return (<div className={`text-center`}>{t('login:fillInTheRequiredFields')}</div>)
      }
    }
  }
  getField(){
    const {t} = this.props;
    const props = {
      1:{
        type:'text',
        name:'login',
        onChange:this.onChange,
        placeholder:t('login:usernamePlaceholder')
      },
      2:{
        type:'password',
        name:'password',
        onChange:this.onChange,
        placeholder:t('login:passwordPlaceholder')
      }
    }
    return (
      <div>
        <div className={`hidden md:block`}>
          <TwoInputCol {...props}/>
        </div>
        <div className={`block md:hidden`}>
          <TwoInputCol {...props}/>
        </div>
      </div>
    )
  }
	render() {
		const {t} = this.props;
		return (
      <div className={`w-full h-full absolute flex-full px-4 md:p-0`}>
        <div className={`w-64 m-auto h-auto py-6 px-3 flex-full flex-col bg-white shadow`}>
          <div className={`text-center`}>{t('main:title')}</div>
          <div className={`text-center`}>{this.checkFail()}</div>
          <TwoInputCol
            {
              ...{
                1:{
                  type:'text',
                  name:'login',
                  onChange:this.onChange,
                  placeholder:t('login:usernamePlaceholder')
                },
                2:{
                  type:'password',
                  name:'password',
                  onChange:this.onChange,
                  placeholder:t('login:passwordPlaceholder')
                }
              }
            }
          />

          <RoundedButton {
              ...{
                onClick:this.onClick,
                bg:'red',
                text:t('login:loginButton')
              }
            }/>
        </div>
      </div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation(['main','login'])(LoginPage));

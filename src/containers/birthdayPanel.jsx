import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaBirthdayCake } from 'react-icons/fa';

import { userActions } from '../state/actions';
import {DefaultNavbar,BirthDayCard} from '../components';
import { useQuery } from '@apollo/react-hooks';
import {GetBirthDay} from '../helper'
const mapStateToProps = (state) => ({
	logined: state.user.logined,
  user: state.user.user
});
function mapDispatchToProps(dispatch) {
	return bindActionCreators(userActions, dispatch);
}
class BirthdayPanel extends React.Component {
	constructor(props) {
		super(props);
		this.LoadNavBar = this.LoadNavBar.bind(this);
		this.LoadBirthDays = this.LoadBirthDays.bind(this);
	}
  LoadNavBar(){
    const {logined,user} = this.props;
    const NavBarSettigns = {};
    if(logined&&_.size(user) !== 0){
      NavBarSettigns.username =user.username
      NavBarSettigns.avatar = user.avatar.media
      NavBarSettigns.icon = FaBirthdayCake
    }
    else{
      NavBarSettigns.username ='Loading'
      NavBarSettigns.avatar = `https://dummyimage.com/500x100/ffffff/000000.png&text=C-LOOP`
    }
    return <DefaultNavbar {...NavBarSettigns}/>

  }
	LoadBirthDays(){
		const {t} = this.props;
		let childs = [];
		const { data:data1 } = useQuery(GetBirthDay('<'));
		const { data:data2 } = useQuery(GetBirthDay('='));
		const { data:data3 } = useQuery(GetBirthDay('>'));
		if(data1 && data2 && data3){
			childs.push(
				<div className={`w-full md:order-1 md:w-full lg:order-2 lg:w-full`}>
					<BirthDayCard users={data2.birthdays} bg={`green`} split={[`md`,`lg`]} title={t('birthday:today')}/>
				</div>
			)
			childs.push(
				<div className={`w-full md:order-2 md:w-1/2 lg:order-1 lg:w-full`}>
					<BirthDayCard users={data1.birthdays} bg={`red`} title={t('birthday:past')}/>
				</div>
			)
			childs.push(
				<div className={`w-full md:order-3 md:w-1/2 lg:order-3 lg:w-full`}>
					<BirthDayCard users={data3.birthdays} title={t('birthday:soon')}/>
				</div>
			)
		}
		return childs;
	}
	render() {
		const { t } = this.props;
		const {LoadNavBar,LoadBirthDays} = this;
		return (
      <div>
        <LoadNavBar/>
				<div className={`container-with-menu overflow-y-auto`}>
					<div className={`w-full h-auto flex flex-col md:flex-row flex-wrap lg:flex-no-wrap`}>
						<LoadBirthDays/>
					</div>
				</div>
      </div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation(['main','birthday'])(BirthdayPanel));

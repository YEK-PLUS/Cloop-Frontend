import React from 'react';
import { Link } from "react-router-dom";
import { FaUserAlt,FaBirthdayCake,FaNewspaper } from 'react-icons/fa';
import { WiDayCloudy } from "react-icons/wi";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { userActions } from '../state/actions';

const mapStateToProps = (state) => ({
	logined: state.user.logined,
	user: state.user.user,
});
function mapDispatchToProps(dispatch) {
	return bindActionCreators(userActions, dispatch);
}
class MobileLauncher extends React.Component {
	constructor(props) {
		super(props);
    this.Launcher = this.Launcher.bind(this)
	}
  Launcher(){
    const {user} = this.props;
		const launcherItems = {
			'birthday':FaBirthdayCake,
			'news':FaNewspaper
		}
    let items = [];
    for (var i = 0; i < _.size(user.authority); i++) {
			const Icon = launcherItems[user.authority[i].name]
      items.push(
				<div key={`launcher-item-${i}`} className={`flex-full square-col-3 p-4`}>
        	<div className={`w-full h-full flex-full`}>
						<Link to={`/${user.authority[i].name}`}>
							<Icon size={`90%`}/>
						</Link>
        	</div>
				</div>
      )
    }
    return items
  }
	render() {
		const { t } = this.props;
    const {Launcher} = this
		return (
			<div className={`w-full h-full flex-full`}>
				<div className={`square-w-full-p-4 flex-full flex-row flex-wrap`}>
					<Launcher/>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('main')(MobileLauncher));

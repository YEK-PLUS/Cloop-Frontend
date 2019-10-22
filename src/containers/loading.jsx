import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userActions } from '../state/actions';

const mapStateToProps = (state) => ({
	logined: state.user.logined,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(userActions, dispatch);
}

class Loading extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { t } = this.props;
		return (
			<div className={`absolute w-full h-full flex-full`}>
        <div className={`square-big loading-fade bg-red-500 rounded-full flex-full font-bold text-white text-2xl`}>
          {t('main:title')}
        </div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('main')(Loading));

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
class ClassName extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { t } = this.props;
		return (
			<div>
				{t('main:title')}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('main')(ClassName));

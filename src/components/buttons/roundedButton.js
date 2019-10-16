import React from 'react';
import _ from 'lodash';
const RoundedButton = (props) => (
  <div className={`animation w-full py-4 px-3 bg-${props.bg}-500 hover:bg-${props.bg}-400`}
    onClick={_.get(props,['onChange'])}>
    {_.get(props,['text'])}
  </div>
)
export default RoundedButton

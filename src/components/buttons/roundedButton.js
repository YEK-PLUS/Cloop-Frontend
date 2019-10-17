import React from 'react';
import _ from 'lodash';
const RoundedButton = (props) => (
  <div className={`animation cursor-pointer text-white font-bold text-lg rounded w-auto m-auto py-2 px-5 bg-${props.bg}-500 hover:bg-${props.bg}-400`}
    onClick={_.get(props,['onClick'])}>
    {_.get(props,['text'])}
  </div>
)
export default RoundedButton

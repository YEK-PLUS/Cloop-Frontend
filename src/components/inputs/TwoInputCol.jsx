import React from 'react';
import _ from 'lodash';
const TwoInputRow = (props) => (
  <div className={`w-full py-4 px-3 flex flex-col`}>
    <div className={`w-full flex flex-col justify-around`}>
      <div className={`w-full border-b-2 border-red-500`}>
        <input
          className={`w-full h-auto px-3 py-2 text-center focus:outline-none`}
          type={_.get(props,['1','type'])}
          name={_.get(props,['1','name'])}
          placeholder={_.get(props,['1','placeholder'])}
          onChange={_.get(props,['1','onChange'])}
        ></input>
      </div>
      <div className={`w-full border-b-2 border-red-500`}>
        <input
          className={`w-full h-auto px-3 py-2 text-center focus:outline-none`}
          type={_.get(props,['2','type'])}
          name={_.get(props,['2','name'])}
          placeholder={_.get(props,['2','placeholder'])}
          onChange={_.get(props,['2','onChange'])}
        ></input>
      </div>
    </div>
  </div>
)
export default TwoInputRow

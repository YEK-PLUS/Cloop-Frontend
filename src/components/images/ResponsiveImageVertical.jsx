import React from 'react';
const ResponsiveImageVertical = (props) => (
  <div className={`w-auto h-full`}>
    <img className={`w-auto h-full ` + (props.ex || '')} src={props.image}/>
  </div>
)
export default (ResponsiveImageVertical)

import React from 'react';
const ResponsiveImageFull = (props) => (
  <div className={`w-full h-full`}>
    <img className={`w-full h-full ` + props.ex || ''} src={props.image}/>
  </div>
)
export default (ResponsiveImageFull)

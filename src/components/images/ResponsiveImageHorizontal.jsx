import React from 'react';
const ResponsiveImageHorizontal = (props) => (
  <div className={`w-full h-auto`}>
    <img className={`w-full h-auto` + props.ex || ''} src={props.image}/>
  </div>
)
export default (ResponsiveImageHorizontal)

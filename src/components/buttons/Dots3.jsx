import React from 'react';
const Dots3 = (props) => (
  <div onClick={props.click || null} className={`dots-3`}>
    <div className={props.color? `bg-`+props.color+`-200`:`bg-gray-200`}></div>
    <div className={props.color? `bg-`+props.color+`-200`:`bg-gray-200`}></div>
    <div className={props.color? `bg-`+props.color+`-200`:`bg-gray-200`}></div>
  </div>
)
export default (Dots3)

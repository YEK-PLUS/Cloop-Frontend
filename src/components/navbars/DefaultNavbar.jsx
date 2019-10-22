import React from 'react';
import { withTranslation } from 'react-i18next';
import {ResponsiveImageVertical} from '..';
import _ from 'lodash';
const DefaultNavbar = (props) => (
  <div className={`w-full h-16 flex-full justify-between shadow-md bg-white`}>
    <div className={`flex flex-row items-center w-auto h-full m-auto md:m-0`}>
      {props.icon? <props.icon className={`absolute`} size={`2rem`}/> : null}
      <ResponsiveImageVertical image={`https://dummyimage.com/500x100/ffffff/000000.png&text=C-LOOP`}/>
    </div>
    <div className={`hidden md:flex w-auto h-full flex-full justify-between px-3 py-2`}>
      <div className={`text-white font-bold px-4`}>
        {props.username}
      </div>
      <ResponsiveImageVertical ex={`rounded-full`} image={props.avatar}/>
    </div>
  </div>
)
export default withTranslation('main')(DefaultNavbar)

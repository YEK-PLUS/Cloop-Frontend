import React from 'react';
import { withTranslation } from 'react-i18next';
import {ResponsiveImageVertical,Dots3} from '..';
import _ from 'lodash';
const ProfileCard = (props) => (
  <div className={`w-full h-auto flex-full justify-between shadow-lg rounded-l-full border my-3 ${props.color? `border-`+props.color+`-900`:`border-gray-900`}`}>
    <div style={{minWidth: `4rem`}} className={`h-16`}>
      <ResponsiveImageVertical ex={`rounded-full`} image={props.avatar.media}/>
    </div>
    <div className={`w-full h-auto px-4 ${props.birthdayVisible ? 'flex flex-row justify-between items-center' : ''}`}>
      <div>
        {props.username}
      </div>
      <div>
        {_.takeRight(props.details.birthday.split('-'),2).join('/')}
      </div>
    </div>
    <div className={`w-auto h-auto`}>
      <Dots3 color={props.color}/>
    </div>
  </div>
)
export default withTranslation('main')(ProfileCard)

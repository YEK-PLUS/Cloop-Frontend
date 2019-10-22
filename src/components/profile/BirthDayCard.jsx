import React from 'react';
import _ from 'lodash'
import {ProfileCard} from '..';
const BirthDayCard = (props) => (
  <div>
    {_.size(props.users)>0?
      <div className={`${props.bg? `bg-`+props.bg+`-400`:`bg-gray-400`} w-full px-4 py-2 text-white flex flex-col justify-center`}>
        <div className={`font-black w-full text-center text-2xl pl-3`}>{props.title}</div>
        <div className={`font-bold w-full flex flex-col justify-center text-xl py-3`}>
          {props.users.map(user =>
            <ProfileCard {
                ...{
                  ...user,
                  color:props.bg,
                  birthdayVisible:true
                }
              }/>
            )}
          </div>
        </div>
    :null}
  </div>
)
export default (BirthDayCard)

import React from 'react';
import _ from 'lodash'
import {ProfileCard} from '..';
const BirthDayCard = (props) => (
  <div>
    {_.size(props.users)>0?
      <div className={`${props.bg? `bg-`+props.bg+`-400`:`bg-gray-400`} w-full px-4 py-2 text-white flex flex-col justify-center`}>
        <div className={`font-black w-full text-center text-2xl pl-3`}>{props.title}</div>
        <div className={`font-bold w-full flex flex-row flex-wrap justify-center text-xl py-3`}>
          {props.users.map(user =>
            <div className={props.split?`w-full ${props.split[0]}:w-1/2 ${props.split[1]}:w-full ${props.split[0]}:px-2 ${props.split[1]}:px-0`:`w-full`}>
              <ProfileCard {
                  ...{
                    ...user,
                    color:props.bg,
                    birthdayVisible:true
                  }
                }/>
            </div>
            )}
          </div>
        </div>
    :null}
  </div>
)
export default (BirthDayCard)

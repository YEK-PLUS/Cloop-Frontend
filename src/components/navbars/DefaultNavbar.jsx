import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import {ResponsiveImageVertical} from '..';
import _ from 'lodash';
const DefaultNavbar = (props) => (
  <div className={`w-full h-16 flex-full justify-between shadow-md bg-white`}>
    {props.location.pathname !== '/' ?
      <Link to={`/`} style={{left:`2rem`}} className={`flex-full absolute block md:hidden`}>
        <FaBars size={`2rem`}/>
      </Link>
    : null}
    <div className={`w-auto h-full m-auto md:m-0 flex-full`}>
      {props.icon? <props.icon style={{left:`2rem`}} className={`absolute hidden md:block`} size={`2rem`}/> : null}
      <ResponsiveImageVertical image={`https://dummyimage.com/500x100/ffffff/000000.png&text=C-LOOP`}/>
    </div>
    {props.icon? <props.icon style={{right:`2rem`}} className={`absolute block md:hidden`} size={`2rem`}/> : null}
    <div className={`hidden md:flex w-auto h-full flex-full justify-between px-3 py-2`}>
      <div className={`text-white font-bold px-4`}>
        {props.username}
      </div>
      <ResponsiveImageVertical ex={`rounded-full`} image={props.avatar}/>
    </div>
  </div>
)
export default withRouter(withTranslation('main')(DefaultNavbar))

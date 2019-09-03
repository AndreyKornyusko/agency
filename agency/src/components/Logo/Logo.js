import React from 'react';

import icons from '../../assets/img/icons.svg';

import s from './Logo.module.scss';

import { ReactComponent as LogoSvg } from '../../assets/img/logo.svg';
// const Logo = () => (
//   <div className={s.svgWrap}>
//     <LogoSvg className={s.icon} />
//   </div>
// );

const Logo = ({ name, iconClass,logoLink }) => (
  <a className={s.logoLink} href="#">
    <div className={s.svgWrap}>
    Amazing Agency
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={`icon-${name}`}
        className={iconClass}
      >
        <use xlinkHref={`${icons}#${name}`} />
      </svg> */}
    </div>
  </a>
);

export default Logo;

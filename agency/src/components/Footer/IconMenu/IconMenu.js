import React from 'react';
import icons from '../../../assets/img/icons.svg';

const IconMenu = ({ items = [], listClass, svgWrap, iconClass, itemClass }) => (
  <ul className={listClass}>
    {items.map(item => (
      <li key={item.iconName} className={itemClass}>
        <a href={item.path}>
          <div className={svgWrap}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={iconClass}
            >
              <use xlinkHref={`${icons}#${item.iconName}`} className={iconClass}/>
            </svg>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

export default IconMenu;

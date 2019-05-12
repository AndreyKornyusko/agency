import React from 'react';

import icons from '../../../assets/img/icons.svg';

const Contacts = ({
  items = [],
  listClass,
  itemClass,
  linkClass,
  contactWrapClass,
  name,
  iconClass,
  svgWrap,
  contactItemText,
  width,
  height
}) => (
  <ul className={listClass}>
    {items.map(item => (
      <li key={item.text} className={itemClass}>
        <a href={item.path} className={linkClass}>
          <div className={contactWrapClass}>
            <div className={svgWrap}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className={`icon-${item.iconName}`}
                className={iconClass}
                width={item.width}
                height={item.height}
              >
                <use xlinkHref={`${icons}#${item.iconName}`} />
              </svg>
            </div>
            <span className={contactItemText}>{item.text}</span>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

export default Contacts;

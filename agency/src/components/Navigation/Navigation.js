import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = ({ items = [], listClass, itemClass, linkClass }) => (
  <ul className={listClass}>
    {items.map(item => (
      <li key={item.name} className={itemClass}>
        <a href={item.path} className={linkClass}>
          {item.name}
        </a>
      </li> 
    ))}
  </ul>
);

export default Navigation;

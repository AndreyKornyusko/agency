import React from 'react';

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

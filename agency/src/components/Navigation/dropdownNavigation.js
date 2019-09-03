import React from 'react'

const DropdownNavigation = ({ items = [], listClass, itemClass, linkClass, handleClick }) => (
  <ul className={listClass}>
    {items.map(item => (
                   <li key={item.name} className={itemClass}>
                     <a href={item.path} className={linkClass}
                     onClick={handleClick}
                     >
                       {item.name}
                     </a>
                   </li>
                 ))}
  </ul>
)
export default DropdownNavigation

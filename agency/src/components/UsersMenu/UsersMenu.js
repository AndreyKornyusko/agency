import React from 'react';
import s from './UsersMenu.module.scss';

const UsersMenu = ({ users, pic='' }) => (
  <ul className={s.list}>
    {users.map(({ id, href, photo, name, position, email, phone }) => (
      <li key={id} className={s.listItem}>
        <a href={href} className={s.link}>
          <div className={s.imgWrap}>
            <img src={photo} className={s.image}/>
          </div>
          <div className={s.contentWrap}>
            <span className={s.name}>{name}</span>
            <span className={s.position}>{position}</span>
            <span className={s.email}>{email}</span>
            <span className={s.phone}>{phone}</span>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

export default UsersMenu;

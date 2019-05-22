import React from 'react';
import s from './UsersMenu.module.scss';

const charactersMaxlimit = {
  name: 35,
  position: 35,
};

const UsersMenu = ({ users, pic = '', usersListHeigthDisabled }) => (
  <ul
    className={s.list}
    style={{ maxHeight: usersListHeigthDisabled && 'none' }}
  >
    {users.map(({ id, href, photo, name, position, email, phone }) => (
      <li key={id} className={s.listItem}>
        <a href={href} className={s.link}>
          <div className={s.imgWrap}>
            <img src={photo} className={s.image} />
          </div>
          <div className={s.contentWrap}>
            <span className={s.name}>
              {name.length > charactersMaxlimit.name
                ? name.substring(0, charactersMaxlimit.name - 3) + '...'
                : name}
            </span>
            <span className={s.position}>
              {position.length > charactersMaxlimit.position
                ? position.substring(0, charactersMaxlimit.position - 3) + '...'
                : position}
            </span>
            <span className={s.email}>{email}</span>
            <span className={s.phone}>{phone}</span>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

export default UsersMenu;

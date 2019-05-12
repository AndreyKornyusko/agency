import React from 'react';
import s from './Avatar.module.scss';

const Avatar = ({ image = '', avatarClass }) => (
  <img
    className={avatarClass}
    src={image}
    alt="user avatar"
  />
);

export default Avatar;

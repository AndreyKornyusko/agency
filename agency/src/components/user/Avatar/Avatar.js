import React from 'react';

const Avatar = ({ image = '', avatarClass }) => (
  <img
    className={avatarClass}
    src={image}
    alt="user avatar"
  />
);

export default Avatar;

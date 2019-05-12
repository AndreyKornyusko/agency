import React from 'react';

import styles from './UsersSection.module.scss';
import UsersMenu from '../UsersMenu/UsersMenu';
import ShowMoreButton from '../Buttons/ShowMoreButton';
// import image from '../../assets/img/user-alexander-2x.jpg'

// const users = [
//   {
//     id: 1,
//     href: '#',
//     image:require('../../assets/img/user-noah-2x.jpg'),
//     name: 'Adolph',
//     profession: 'designer',
//     mail: 'amazing.mail',
//     phone: '+380972884180',
//   },
//   {
//     id: 2,
//     href: '#',
//     image:require('../../assets/img/user-noah-2x.jpg'),
//     name: 'Adolph Lungren Vandam Iron Man',
//     profession: 'designer',
//     mail: 'amazing.mail',
//     phone: '+380972884180',
//   },
//   {
//     id: 3,
//     href: '#',
//     image:require('../../assets/img/user-noah-2x.jpg'),
//     name: 'Adolph Lungren Vandam Iron Man',
//     profession: 'designer',
//     mail: 'amazing.mail',
//     phone: '+380972884180',
//   },
//   {
//     id: 4,
//     href: '#',
//     image:require('../../assets/img/user-elizabeth-2x.jpg'),
//     name: 'Adolph',
//     profession: 'designer',
//     mail: 'amazing.mail',
//     phone: '+380972884180',
//   },
//   {
//     id: 5,
//     href: '#',
//     image:require('../../assets/img/user-elizabeth-2x.jpg'),
//     name: 'Adolph',
//     profession: 'designer',
//     mail: 'amazing.mail',
//     phone: '+380972884180',
//   },
//   {
//     id: 6,
//     href: '#',
//     image:require('../../assets/img/user-elizabeth-2x.jpg'),
//     name: 'Adolph',
//     profession: 'designer',
//     mail: 'amazing.mail',
//     phone: '+380972884180',
//   },
// ];

const UsersSection = ({ users, handleShowMore, showButton }) => (
  <section className={styles.section} id="users">
    <h2 className={styles.title}>Our cheerful users</h2>
    <span className={styles.note}>
      Attention! Sorting users by registration date
    </span>
    <div className={styles.container}>
      <UsersMenu users={users} />

      {showButton && (
        <ShowMoreButton handleShowMoreClik={handleShowMore} showButton={true} />
      )}
    </div>
  </section>
);

export default UsersSection;

import React from 'react';

import styles from './UsersSection.module.scss';
import UsersMenu from '../UsersMenu/UsersMenu';
import ShowMoreButton from '../Buttons/ShowMoreButton';

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

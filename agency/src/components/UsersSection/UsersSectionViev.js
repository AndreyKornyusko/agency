import React from 'react';

import styles from './UsersSection.module.scss';
import UsersSectionText from '../../languages/en/UsersSection';

import UsersMenu from '../UsersMenu/UsersMenu';
import ShowMoreButton from '../Buttons/ShowMoreButton';

const UsersSection = ({
  users,
  handleShowMore,
  showButton,
  usersListHeigthDisabled,
}) => (
  <section className={styles.section} id="users">
    <h2 className={styles.title}>{UsersSectionText.mainTitle}</h2>
    <span className={styles.note}>{ UsersSectionText.attention} </span>
    <div className={styles.container}>
      <UsersMenu
        users={users}
        usersListHeigthDisabled={usersListHeigthDisabled}
      />

      {showButton && (
        <ShowMoreButton handleShowMoreClik={handleShowMore} showButton={true} />
      )}
    </div>
  </section>
);

export default UsersSection;

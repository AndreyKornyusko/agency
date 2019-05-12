import React from 'react';
import styles from './HeadSection.module.scss';
import HeadButton from '../Buttons/HeadButton';

const HeadSection = () => (
  <section className={styles.section}>
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>
        Test assignment for Frontend Developer position
      </h1>
      <p className={styles.content}>
        We kindly remind you that your test assignment should be submitted as a
        link to github/bitbucket repository. Please be patient, we consider and
        respond to every application that meets minimum requirements. We look
        forward to your submission. Good luck!
      </p>
      <HeadButton />
    </div>
  </section>
);

export default HeadSection;

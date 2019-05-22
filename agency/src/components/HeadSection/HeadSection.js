import React from 'react';
import styles from './HeadSection.module.scss';
import HeadButton from '../Buttons/HeadButton';
import HeadSectionText from '../../languages/en/HeadSection';

const charactersMaxlimit = {
  title: 60,
  content: 290,
  mobileContent: 190,
};

const HeadSection = () => (
  <section className={styles.section}>
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>
        {HeadSectionText.title.length > charactersMaxlimit.title
          ? HeadSectionText.title.substring(0, charactersMaxlimit.title - 3) +
            '...'
          : HeadSectionText.title}
      </h1>
      <p className={styles.mobileContent}>
        {HeadSectionText.mobileContent.length > charactersMaxlimit.mobileContent
          ? HeadSectionText.mobileContent.substring(
              0,
              charactersMaxlimit.mobileContent - 3,
            ) + '...'
          : HeadSectionText.mobileContent}
      </p>

      <p className={styles.content}>
        {HeadSectionText.content.length > charactersMaxlimit.content
          ? HeadSectionText.content.substring(
              0,
              charactersMaxlimit.content - 3,
            ) + '...'
          : HeadSectionText.content}
      </p>
      <HeadButton />
    </div>
  </section>
);

export default HeadSection;

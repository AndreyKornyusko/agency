import React from 'react';
import styles from './AboutSection.module.scss';
import { ReactComponent as ManSvg } from '../../assets/img/man-mobile.svg';

const SectionImg = () => (
  <div>
    <ManSvg className={styles.svg} />
  </div>
);

const AboutSection = () => (
  <section className={styles.aboutSection} id="about">
    <h2 className={styles.title}>Let's get acquainted</h2>
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <SectionImg />
      </div>
      <div className={styles.contantWrap}>
        <h3 className={styles.secTitle}>I am cool frontend developer</h3>
        <p className={styles.content}>
          When real users have a slow experience on mobile, they're much less
          likely to find what they are looking for or purchase from you in the
          future. For many sites this equates to a huge missed opportunity,
          especially when more than half of visits are abandoned if a mobile
          page takes over 3 seconds to load.
        </p>
        <p className={styles.content}>
          Last week, Google Search and Ads teams announced two new speed
          initiatives to help improve user-experience on the web.
        </p>
        <a href="#signup"  className={styles.button}>
          Sign Up
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;

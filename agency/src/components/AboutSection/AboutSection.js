import React from 'react';
import styles from './AboutSection.module.scss';
import AboutSectionText from '../../languages/en/AboutSection';
import { ReactComponent as ManSvg } from '../../assets/img/man-mobile.svg';

const charactersMaxlimit = {
  mainTitle: 75,
  secondTitle: 75,
  firstParagraph: 390,
  secondParagraph: 390,
};

const SectionImg = () => (
  <div>
    <ManSvg className={styles.svg} /> 
  </div>
);

const AboutSection = () => (
  <section className={styles.aboutSection} id="about">
    <h2 className={styles.title}>
      {AboutSectionText.mainTitle.length > charactersMaxlimit.mainTitle
        ? AboutSectionText.mainTitle.substring(
            0,
            charactersMaxlimit.mainTitle - 3,
          ) + '...'
        : AboutSectionText.mainTitle}
    </h2>
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <SectionImg />
      </div>
      <div className={styles.contentWrap}>
        <h3 className={styles.secTitle}>
          {AboutSectionText.secondTitle.length > charactersMaxlimit.secondTitle
            ? AboutSectionText.secondTitle.substring(
                0,
                charactersMaxlimit.secondTitle - 3,
              ) + '...'
            : AboutSectionText.secondTitle}
        </h3>
        <p className={styles.content}>
          {AboutSectionText.firstParagraph.length >
          charactersMaxlimit.firstParagraph
            ? AboutSectionText.firstParagraph.substring(
                0,
                charactersMaxlimit.firstParagraph - 3,
              ) + '...'
            : AboutSectionText.firstParagraph}
        </p>
        <p className={styles.content}>
          {AboutSectionText.secondParagraph.length >
          charactersMaxlimit.secondParagraph
            ? AboutSectionText.secondParagraph.substring(
                0,
                charactersMaxlimit.secondParagraph - 3,
              ) + '...'
            : AboutSectionText.secondParagraph}
        </p>
        <a href="#signup" className={styles.button}>
          Sign Up
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;

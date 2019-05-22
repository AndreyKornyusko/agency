import React from 'react';

import styles from './RequirementsSection.module.scss';
import RequerementsText from '../../languages/en/Requirements';
import { ReactComponent as FirstManSvg } from '../../assets/img/man-laptop-v1.svg';
import { ReactComponent as SecondManSvg } from '../../assets/img/man-laptop-v2.svg';

const SecondManImg = () => (
  <div>
    <SecondManSvg className={styles.SecondSectionImg} />
  </div>
);

const FirstManImg = () => (
  <div>
    <FirstManSvg className={styles.FirstSectionImg} />
  </div>
);

const charactersMaxlimit = {
  mainTitle: 54,
  firstParagraph: 350,
  secondParagraph: 350,
  thirdParagraph: 350,
};

const RequirementsSection = () => (
  <section className={styles.section} id="requirements">
    <h2 className={styles.title}>
      {RequerementsText.mainTitle.length > charactersMaxlimit.mainTitle
        ? RequerementsText.mainTitle.substring(
            0,
            charactersMaxlimit.mainTitle - 3,
          ) + '...'
        : RequerementsText.mainTitle}
    </h2>
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <FirstManImg />
        <SecondManImg />
      </div>
      <div className={styles.contentWrap}>
        <p className={styles.content}>
          {RequerementsText.firstParagraph.length >
          charactersMaxlimit.firstParagraph
            ? RequerementsText.firstParagraph.substring(
                0,
                charactersMaxlimit.firstParagraph - 3,
              ) + '...'
            : RequerementsText.firstParagraph}
        </p>
        <p className={styles.content}>
          {RequerementsText.secondParagraph.length >
          charactersMaxlimit.secondParagraph
            ? RequerementsText.secondParagraph.substring(
                0,
                charactersMaxlimit.secondParagraph - 3,
              ) + '...'
            : RequerementsText.secondParagraph}
        </p>
        <p className={styles.content}>
          {RequerementsText.thirdParagraph.length >
          charactersMaxlimit.thirdParagraph
            ? RequerementsText.thirdParagraph.substring(
                0,
                charactersMaxlimit.thirdParagraph - 3,
              ) + '...'
            : RequerementsText.thirdParagraph}
        </p>
      </div>
    </div>
  </section>
);

export default RequirementsSection;

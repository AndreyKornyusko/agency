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

const RequirementsSection = () => (
  <section className={styles.section} id="requirements">
    <h2 className={styles.title}>
      {RequerementsText.mainTitle}
    </h2>
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <FirstManImg />
        <SecondManImg />
      </div>
      <div className={styles.contentWrap}>
        <p className={styles.content}>
          {RequerementsText.firstParagraph}
        </p>
        <p className={styles.content}>
          {RequerementsText.secondParagraph}
        </p>
        <p className={styles.content}>
          {RequerementsText.thirdParagraph}
        </p>
      </div>
    </div>
  </section>
);

export default RequirementsSection;

import React from 'react';

import styles from './RequirementsSection.module.scss';
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
    <h2 className={styles.title}>General requirements for the test task</h2>
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <FirstManImg />
        <SecondManImg />
      </div>
      <div className={styles.contentWrap}>
        <p className={styles.content}>
          Users want to find answers to their questions quickly and data shows
          that people really care about how quickly their pages load. The Search
          team announced speed would be a ranking signal for desktop searches in
          2010 and as of this month (July 2018), page speed will be a ranking
          factor for mobile searches too.
        </p>
        <p className={styles.content}>
          If you're a developer working on a site, now is a good time to
          evaluate your performance using our speed tools. Think about how
          performance affects the user experience of your pages and consider
          measuring a variety of real-world user-centric performance metrics.
        </p>
        <p className={styles.content}>
          Are you shipping too much JavaScript? Too many images? Images and
          JavaScript are the most significant contributors to the page weight
          that affect page load time based on data from HTTP Archive and the
          Chrome User Experience Report - our public dataset for key UX metrics
          as experienced by Chrome users under real-world conditions.
        </p>
      </div>
    </div>
  </section>
);

export default RequirementsSection;

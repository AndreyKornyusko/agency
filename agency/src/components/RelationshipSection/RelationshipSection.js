import React from 'react';
import styles from './RelationshipSection.module.scss';
import RelationshipText from '../../languages/en/Relationship';

import { ReactComponent as HtmlSvg } from '../../assets/img/html.svg';
import { ReactComponent as CssSvg } from '../../assets/img/css.svg';
import { ReactComponent as JavascriptSvg } from '../../assets/img/javascript.svg';

const HtmlImg = () => (
  <div>
    <HtmlSvg className={styles.htmsSvg} />
  </div>
);

const CssImg = () => (
  <div>
    <CssSvg className={styles.cssSvg} />
  </div>
);

const JavascriptImg = () => (
  <div>
    <JavascriptSvg className={styles.javascriptSvg} />
  </div>
);

const RelationshipSection = () => (
  <section className={styles.section} id="relationships">
    <h2 className={styles.title}>
      { RelationshipText.mainTitle}
    </h2>
    <div className={styles.container}>
      <div className={styles.contentWrap}>
        <div className={styles.imgWrap}>
          <HtmlImg />
        </div>
        <div className={styles.partWrap}>
          <h3 className={styles.partTitle}>
            { RelationshipText.htmlTitle}
          </h3>
          <p className={styles.content}>
            { RelationshipText.htmlText}
          </p>
        </div>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.imgWrap}>
          <CssImg />
        </div>
        <div className={styles.partWrap}>
          <h3 className={styles.partTitle}>
            { RelationshipText.cssTitle}
          </h3>
          <p className={styles.content}>
            {RelationshipText.cssText}
          </p>
        </div>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.imgWrap}>
          <JavascriptImg />
        </div>
        <div className={styles.partWrap}>
          <h3 className={styles.partTitle}>
            { RelationshipText.jsTitle}
          </h3>
          <p className={styles.content}>
            { RelationshipText.jsText}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default RelationshipSection;

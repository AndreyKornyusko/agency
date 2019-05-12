import React from 'react';
import styles from './RelationshipSection.module.scss';

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
      About my relationships with web-development
    </h2>
    <div className={styles.container}>
      <div className={styles.contentWrap}>
        <div className={styles.imgWrap}>
          <HtmlImg />
        </div>
        <div className={styles.partWrap}>
          <h3 className={styles.partTitle}>I'm in love with HTML</h3>
          <p className={styles.content}>
            Hypertext Markup Language (HTML) is the standard markup language for
            creating web pages and web applications.
          </p>
        </div>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.imgWrap}>
          <CssImg />
        </div>
        <div className={styles.partWrap}>
          <h3 className={styles.partTitle}>CSS is my best friend</h3>
          <p className={styles.content}>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language like HTML.
          </p>
        </div>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.imgWrap}>
          <JavascriptImg />
        </div>
        <div className={styles.partWrap}>
          <h3 className={styles.partTitle}>JavaScript is my passion</h3>
          <p className={styles.content}>
            JavaScript is a high-level, interpreted programming language. It is
            a language which is also characterized as dynamic, weakly typed,
            prototype-based and multi-paradigm.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default RelationshipSection;

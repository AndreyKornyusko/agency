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

const charactersMaxlimit = {
  mainTitle: 54,
  htmlTitle: 25,
  cssTitle: 25,
  jsTitle: 25,
  htmlText: 175,
  cssText: 175,
  jsText: 175,
};

const RelationshipSection = () => (
  <section className={styles.section} id="relationships">
    <h2 className={styles.title}>
      {RelationshipText.mainTitle.length > charactersMaxlimit.mainTitle
        ? RelationshipText.mainTitle.substring(
            0,
            charactersMaxlimit.mainTitle - 3,
          ) + '...'
        : RelationshipText.mainTitle}
    </h2>
    <div className={styles.container}>
      <div className={styles.contentWrap}>
        <div className={styles.imgWrap}>
          <HtmlImg />
        </div>
        <div className={styles.partWrap}>
          <h3 className={styles.partTitle}>
            {RelationshipText.htmlTitle.length > charactersMaxlimit.htmlTitle
              ? RelationshipText.htmlTitle.substring(
                  0,
                  charactersMaxlimit.htmlTitle - 3,
                ) + '...'
              : RelationshipText.htmlTitle}
          </h3>
          <p className={styles.content}>
            {RelationshipText.htmlText.length > charactersMaxlimit.htmlText
              ? RelationshipText.htmlText.substring(
                  0,
                  charactersMaxlimit.htmlText - 3,
                ) + '...'
              : RelationshipText.htmlText}
          </p>
        </div>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.imgWrap}>
          <CssImg />
        </div>
        <div className={styles.partWrap}>
          <h3 className={styles.partTitle}>
            {RelationshipText.cssTitle.length > charactersMaxlimit.cssTitle
              ? RelationshipText.cssTitle.substring(
                  0,
                  charactersMaxlimit.cssTitle - 3,
                ) + '...'
              : RelationshipText.cssTitle}
          </h3>
          <p className={styles.content}>
            {RelationshipText.cssText.length > charactersMaxlimit.cssText
              ? RelationshipText.cssText.substring(
                  0,
                  charactersMaxlimit.cssText - 3,
                ) + '...'
              : RelationshipText.cssText}
          </p>
        </div>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.imgWrap}>
          <JavascriptImg />
        </div>
        <div className={styles.partWrap}>
          <h3 className={styles.partTitle}>
            {RelationshipText.jsTitle.length > charactersMaxlimit.jsTitle
              ? RelationshipText.jsTitle.substring(
                  0,
                  charactersMaxlimit.jsTitle - 3,
                ) + '...'
              : RelationshipText.jsTitle}
          </h3>
          <p className={styles.content}>
            {RelationshipText.jsText.length > charactersMaxlimit.jsText
              ? RelationshipText.jsText.substring(
                  0,
                  charactersMaxlimit.jsText - 3,
                ) + '...'
              : RelationshipText.jsText}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default RelationshipSection;

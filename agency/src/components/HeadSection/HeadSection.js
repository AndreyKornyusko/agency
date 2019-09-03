import React from 'react'
import styles from './HeadSection.module.scss'
import HeadButton from '../Buttons/HeadButton'
import HeadSectionText from '../../languages/en/HeadSection'

const HeadSection = () => (
  <section className={styles.section}>
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>{HeadSectionText.title}</h1>
      <p className={styles.mobileContent}>
        {HeadSectionText.mobileContent}
      </p>
      <p className={styles.content}>
        {HeadSectionText.content}
      </p>
      <HeadButton />
    </div>
  </section>
)

export default HeadSection

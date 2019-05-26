import React from 'react';

import styles from './SignUpForm.module.scss';

import Select from '../Select/Select';
import SignUpButton from '../../Buttons/SignUpButton';
import icons from '../../../assets/img/icons.svg';

const UploadSvg = ({ name }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={styles.uploadSvg}
  >
    <use xlinkHref={`${icons}#${name}`} />
  </svg>
);

const SignUpForm = ({
  handleSubmit,
  handleChange,
  handleFileInput,
  name,
  email,
  phone,
  positions,
  photo,
  isDisabled,
  enable,
  headerPosition,
  resetThenSet,
}) => (
  <form className={styles.form} onSubmit={handleSubmit} noValidate>
    <div className={styles.formWrap}>
      <div className={styles.inputWrap}>
        <label className={styles.nameLabel}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Your name"
            required
            onChange={handleChange}
          />
        </label>
        <label className={styles.mailLabel}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your email"
            required
            onChange={handleChange}
          />
        </label>
        <label className={styles.phoneLabel}>
          <input
            type="tel"
            name="phone"
            value={phone}
            placeholder="+38 (___) ___ __ __"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.selectWrap}>
        <Select
          positions={positions}
          headerPosition={headerPosition}
          resetThenSet={resetThenSet}
        />
        <label htmlFor="upload" className={styles.uploadLabel}>
          Upload your photo
          <span className={styles.uploadIconWrap}>
            <span className={styles.uploadText}>Upload</span>
            <UploadSvg name="icon-upload" />
          </span>
        </label>
        <input
          type="file"
          id="upload"
          name="photo"
          accept="image/*"
          onChange={handleFileInput}
        />
      </div>
    </div>
    <SignUpButton isDisabled={!enable} />
  </form>
);

export default SignUpForm;

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
  nameValid,
  mailValid,
  phoneValid,
}) => (
  <form className={styles.form} onSubmit={handleSubmit} noValidate>
    <div className={styles.formWrap}>
      <div className={styles.inputWrap}>
        <label className={nameValid ? styles.nameLabel : styles.nameLabelError}>
          <input
            className={nameValid ? styles.nameInput : styles.nameInputError}
            type="text"
            name="name"
            value={name}
            placeholder={nameValid ? 'Your name' : ''}
            required
            onChange={handleChange}
          />
        </label>
        <label className={mailValid ? styles.mailLabel : styles.mailLabelError}>
          <input
            className={mailValid ? styles.mailInput : styles.mailInputError}
            type="email"
            name="email"
            value={email}
            placeholder={mailValid ? 'Your email' : ''}
            required
            onChange={handleChange}
          />
        </label>
        <label
          className={phoneValid ? styles.phoneLabel : styles.phoneLabelError}
        >
          <input
            className={phoneValid ? styles.phoneInput : styles.phoneInputError}
            type="tel"
            name="phone" 
            value={phone}
            placeholder={phoneValid ? '+38 (___) ___ __ __' : ''}
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
          accept="image/*,image/jpeg"
          onChange={handleFileInput}
        />
      </div>
    </div>
    <SignUpButton isDisabled={!enable} />
  </form>
);

export default SignUpForm;

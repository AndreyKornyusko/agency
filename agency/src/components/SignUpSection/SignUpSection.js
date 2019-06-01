import React, { Component } from 'react';

import styles from './SignUpSection.module.scss';
import SignUpSectionText from '../../languages/en/SignUpSection';

import SignUpForm from './SignUpForm/SignUpForm';
import Modal from '../modal/Modal';

const charactersMaxlimit = {
  mainTitle: 55,
  attention: 103,
}; 

export default class SignUpSection extends Component {
  render() {
    const { 
      isDisabled,
      handleSubmit,
      handleChange,
      handleFileInput,
      name,
      email,
      phone,
      positions,
      enable,
      resetThenSet,
      headerPosition,
      isSelectReset,
      isModalOpen,
      onCloseModal,
      nameValid,
      mailValid,
      phoneValid
    } = this.props;

    return (
      <section className={styles.section} id="signup">
        <h2 className={styles.title}>
          {SignUpSectionText.mainTitle.length > charactersMaxlimit.mainTitle
            ? SignUpSectionText.mainTitle.substring(
                0,
                charactersMaxlimit.mainTitle - 3,
              ) + '...'
            : SignUpSectionText.mainTitle}
        </h2>
        <span className={styles.note}>
          {SignUpSectionText.attention.length > charactersMaxlimit.attention
            ? SignUpSectionText.attention.substring(
                0,
                charactersMaxlimit.attention - 3,
              ) + '...'
            : SignUpSectionText.attention}
        </span>
        <div className={styles.container}>
          <SignUpForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleFileInput={handleFileInput}
            name={name}
            email={email}
            phone={phone}
            positions={positions}
            enable={enable}
            isDisabled={isDisabled}
            headerPosition={headerPosition}
            resetThenSet={resetThenSet}
            isSelectReset={isSelectReset}
            nameValid={nameValid}
            mailValid={mailValid}
            phoneValid= {phoneValid}
          />
        </div>
        {isModalOpen && (
          <Modal
            onClose={onCloseModal}
            modalBackdrop={styles.backdrop}
            modalClass={styles.modal}
          >
            <div className={styles.modalWrap}>
              <h3 className={styles.modalTitle}>Congratulations</h3>
              <p className={styles.modalText}>
                You have successfully passed the registration
              </p>
              <div className={styles.modalButtonWrap}>
                <button className={styles.modalButton} onClick={onCloseModal}>
                  ok
                </button>
              </div>
            </div>
          </Modal>
        )}
      </section>
    );
  }
}

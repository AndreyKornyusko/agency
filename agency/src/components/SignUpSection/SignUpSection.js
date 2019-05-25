import React, { Component } from 'react';

import styles from './SignUpSection.module.scss';
import SignUpSectionText from '../../languages/en/SignUpSection';

import * as API from '../../services/api';
import SignUpForm from './SignUpForm/SignUpForm';
import Modal from '../modal/Modal';
import modalStyles from '../modal/modal.module.scss';

const charactersMaxlimit = {
  mainTitle: 55,
  attention: 103,
};

export default class SignUpSection extends Component {
  state = {
    // isModalOpen: false,
    // positions: [{ id: 1, name: 'Select your position', selected: false }],
  };

  componentDidMount() {
    // API.getPositions()
    //   .then(data => data.positions)
    //   .then(data => {
    //     this.setState({ positions: [...data] });
    //   });
  }

  // resetThenSet = id => {
  //   let temp = this.state.positions;
  //   // console.log('temp', temp);
  //   temp.forEach(item => (item.selected = false));
  //   // console.log('temp.1', temp[0]);
  //   temp[Number(id) - 1].selected = true;
  //   this.setState({
  //     positions: temp,
  //   });
  // };

  // openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.props.onCloseModal;

  render() {
    // const { isModalOpen } = this.state;

    const {
      isDisabled,
      handleSubmit,
      handleChange,
      handleFileInput,
      name,
      email,
      phone,
      position_id,
      positions,
      photo,
      enable,
      resetThenSet,
      headerPosition,
      isSelectReset,
      isModalOpen,
      onCloseModal,
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
            // currentPosition={positions[0].name}
            headerPosition={headerPosition}
            // resetThenSet={this.resetThenSet}
            resetThenSet={resetThenSet}
            isSelectReset={isSelectReset}
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
                <button className={styles.modalButton} onClick={onCloseModal}>ok</button>
              </div>
            </div>
          </Modal>
        )}
      </section>
    );
  }
}

// export default class SignUpSection extends Component {
//   state = {
//     ...INITIAL_STATE,
//     positions: [],
//     token: '',
//     baseUrl:
//       'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
//   };

//   componentDidMount() {
//     API.getPositions()
//       .then(data => data.positions)
//       .then(data => {
//         this.setState({ positions: [...data] });
//       });

//     API.getToken().then(data => {
//       this.setState({ token: data });
//     });
//   }

//   handleSubmit = e => {
//     e.preventDefault();

//     const { position_id, name, email, phone, photo, token } = this.state;
//     console.log('this.state', this.state);

//     API.PostUser(position_id, name, email, phone, photo, token);

//     this.setState({ ...INITIAL_STATE });

//     this.setState({ isDisable: false });
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleFileInput = () => {
//     const fileField = document.querySelector('input[type="file"]');
//     this.setState({ photo: fileField.files[0] });
//   };

//   render() {
//     const { positions, name, email, phone, position_id, photo } = this.state;
//     const { isDisabled } = this.props;

//     const enable =
//       position_id.length > 0 &&
//       name.length > 0 &&
//       email.length > 0 &&
//       phone.length > 0 &&
//       photo!=='';

//     return (
//       <section className={styles.section} id="signup">
//         <h2 className={styles.title}>Register to get a work</h2>
//         <span className={styles.note}>
//           Attention! After successful registration and alert, update the list of
//           users in the block from the top
//         </span>
//         <div className={styles.container}>
//           <form className={styles.form} noValidate onSubmit={this.handleSubmit}>
//             <div className={styles.formWrap}>
//               <div className={styles.inputWrap}>
//                 <label className={styles.nameLabel}>
//                   <input
//                     type="text"
//                     name="name"
//                     value={name}
//                     placeholder="Your name"
//                     required
//                     onChange={this.handleChange}
//                   />
//                 </label>
//                 <label className={styles.mailLabel}>
//                   <input
//                     type="email"
//                     name="email"
//                     value={email}
//                     placeholder="Your email"
//                     required
//                     onChange={this.handleChange}
//                   />
//                 </label>
//                 <label className={styles.phoneLabel}>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={phone}
//                     placeholder="+38 (___) ___ __ __"
//                     required
//                     onChange={this.handleChange}
//                   />
//                 </label>
//               </div>
//               <div className={styles.selectWrap}>
//                 <select
//                   name="position_id"
//                   className={styles.select}
//                   onChange={this.handleChange}
//                 >
//                   {positions.map(item => (
//                     <option key={item.id} value={item.id}>
//                       {item.name}
//                     </option>
//                   ))}
//                 </select>
//                 <label htmlFor="upload" className={styles.uploadLabel}>
//                   Upload your photo
//                   <span className={styles.uploadIconWrap}>
//                     <span className={styles.uploadText}>Upload</span>
//                     <UploadSvg name="icon-upload" />
//                   </span>
//                 </label>
//                 <input
//                   type="file"
//                   id="upload"
//                   name="photo"
//                   accept="image/*"
//                   onChange={this.handleFileInput}
//                 />
//               </div>
//             </div>
//             <SignUpButton isDisabled={!enable} />
//           </form>
//         </div>
//       </section>
//     );
//   }
// }

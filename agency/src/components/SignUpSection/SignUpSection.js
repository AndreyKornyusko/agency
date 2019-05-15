import React, { Component } from 'react';

import styles from './SignUpSection.module.scss';
import SignUpButton from '../Buttons/SignUpButton';
import icons from '../../assets/img/icons.svg';
import * as API from '../../services/api';
import SignUpForm from './SignUpForm';

const UploadSvg = ({ name }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={styles.uploadSvg}
  >
    <use xlinkHref={`${icons}#${name}`} />
  </svg>
);

// const INITIAL_STATE = {
//   name: '',
//   email: '',
//   position_id: '',
//   phone: '',
//   photo: '',
// };

export default class SignUpSection extends Component {
  state = {
    // ...INITIAL_STATE,
    positions: [],
    // token: '',
    // baseUrl:
    //   'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
  };

  componentDidMount() {
    API.getPositions()
      .then(data => data.positions)
      .then(data => {
        this.setState({ positions: [...data] });
      });

    // API.getToken().then(data => {
    //   this.setState({ token: data });
    // });
  }

  // handleSubmit = e => {
  //   e.preventDefault();

  //   const { position_id, name, email, phone, photo, token } = this.state;
  //   console.log('this.state', this.state);

  //   API.PostUser(position_id, name, email, phone, photo, token);

  //   this.setState({ ...INITIAL_STATE });

  //   this.setState({ isDisable: false });
  // };

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  // handleFileInput = () => {
  //   const fileField = document.querySelector('input[type="file"]');
  //   this.setState({ photo: fileField.files[0] });
  // };

  render() {
    const { positions } = this.state;
    const {
      isDisabled,
      handleSubmit,
      handleChange,
      handleFileInput,
      name,
      email,
      phone,
      position_id,
      photo,
      enable,
    } = this.props;

    // const enable =
    // position_id.length > 0 &&
    // name.length > 0 && email.length > 0 && phone.length > 0 && photo !== '';

    return (
      <section className={styles.section} id="signup">
        <h2 className={styles.title}>Register to get a work</h2>
        <span className={styles.note}>
          Attention! After successful registration and alert, update the list of
          users in the block from the top
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
          />
        </div>
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

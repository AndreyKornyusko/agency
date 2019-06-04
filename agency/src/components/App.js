import React, { Component } from 'react';

import style from './styles.module.scss';
import * as API from '../services/api';

import AppHeader from './AppHeader/AppHeader';
import HeadSection from '../components/HeadSection/HeadSection';
import AboutSection from '../components/AboutSection/AboutSection';
import RelationshipSection from '../components/RelationshipSection/RelationshipSection';
import RequirementsSection from '../components/RequirementsSection/RequirementsSection';
import UsersSection from '../components/UsersSection/UsersSectionViev';
import SignUpSection from '../components/SignUpSection/SignUpSection';
import Footer from '../components/Footer/Footer';

const INITIAL_STATE = {
  name: '',
  email: '',
  position_id: 0,
  positions: [{ id: 0, name: 'Select your position', selected: true }],
  token: '',
  nameValid: true,
  mailValid: true,
  phoneValid: true,
  photoValid: false,
  positionValid: false,
  phone: '',
  photo: '',
  isModalOpen: false,
  isNameInputFilled: false,
  isMailInputFilled: false,
  isPhoneInputFilled: false,
  formValid: false,
  headerPosition: 'Select your position',
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
    data: [],
    nextUrl: '',

    showButton: true,
    usersListHeigthDisabled: false,
    baseUrl:
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
    resetPageUrl:
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
  };

  componentDidMount() {
    this.getUsers(this.state.baseUrl);

    API.getToken().then(data => {
      this.setState({ token: data });
    });

    API.getPositions()
      .then(data => data.positions)
      .then(data => {
        const initialPosition = INITIAL_STATE.positions[0];
        this.setState({ positions: [initialPosition, ...data] });
      });

    this.getSelectedPosition();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevStateHeaderPosition = prevState.headerPosition;
    const nextStateHeaderPosition = this.state.headerPosition;
    if (prevStateHeaderPosition !== nextStateHeaderPosition) {
      this.getSelectedPosition();
    }
  }

  resetThenSet = id => {
    let temp = this.state.positions;
    temp.forEach(item => (item.selected = false));
    temp[Number(id)].selected = true;
    this.setState(
      {
        positions: temp,
        position_id: id,
      },

      this.validatePositionId(id),
    );
  };

  validatePositionId = id => {
    if (id !== 0) {
      this.setState(
        {
          positionValid: true,
        },
        this.validateForm,
      );
    }
  };

  getUsers = url => {
    API.getUsers(url)
      .then(data => data.users)
      .then(data => this.setState({ data }));
  };

  handleShowMoreClick = () => {
    if (this.state.baseUrl) {
      API.getUsers(this.state.baseUrl).then(data => {
        const nextUrl = data.links.next_url;
        if (nextUrl) {
          this.setState({ baseUrl: nextUrl });

          API.getUsers(nextUrl)
            .then(data => data.users)
            .then(users => {
              this.setState({
                data: [...this.state.data, ...users],
                usersListHeigthDisabled: true,
              });
            });
        } else {
          this.setState(prewState => ({ showButton: !prewState.showButton }));
        }
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { position_id, name, email, phone, photo, token } = this.state;

    API.PostUser(position_id, name, email, phone, photo, token).then(data => {
      if (data.success) {
        this.getUsers(this.state.resetPageUrl);
        this.setState({ isModalOpen: true, formValid: false });
      }
    });
    this.resetThenSet(0);

    e.target.reset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.validateField(name, value));
  };

  validateField = (fieldName, value) => {
    let { nameValid, mailValid, phoneValid } = this.state;

    const nameRegExpresh = /^[a-zа-яёA-ZА-ЯЁ0-9_ -]{2,60}$/;
    const mailRegExpresh = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const phoneRegExpresh = /^\+380\d{9}$/;

    switch (fieldName) {
      case 'name':
        nameValid = nameRegExpresh.test(value);
        this.setState({ isNameInputFilled: true });
        break;

      case 'email':
        mailValid = mailRegExpresh.test(value);
        this.setState({ isMailInputFilled: true });
        break;

      case 'phone':
        phoneValid = phoneRegExpresh.test(value);
        this.setState({ isPhoneInputFilled: true });
        break;
      default:
        break;
    }

    this.setState(
      {
        nameValid: nameValid,
        mailValid: mailValid,
        phoneValid: phoneValid,
      },
      this.validateForm,
    );
  };

  validateForm = () => {
    const {
      nameValid,
      mailValid,
      phoneValid,
      photoValid,
      positionValid,
      isNameInputFilled,
      isMailInputFilled,
      isPhoneInputFilled,
    } = this.state;
    this.setState({
      formValid:
        nameValid &&
        mailValid &&
        phoneValid &&
        positionValid &&
        photoValid &&
        isNameInputFilled &&
        isMailInputFilled &&
        isPhoneInputFilled,
    });
  };

  handleFileInput = () => {
    const fileField = document.querySelector('input[type="file"]');
    const fileType = fileField.files[0].type;
    const fileSize = fileField.files[0].size / 1024 / 1024;
    if (fileType !== 'image/jpeg' || fileSize > 5) {
      this.setState({ photoValid: false });
      return;
    } else {
      this.setState(
        { photoValid: true, photo: fileField.files[0] },
        this.validateForm,
      );
    }
  };

  closeModal = () => {
    this.setState({
      ...INITIAL_STATE,
    });

    API.getToken().then(data => {
      this.setState({ token: data });
    });

    API.getPositions()
      .then(data => data.positions)
      .then(data => {
        const initialPosition = INITIAL_STATE.positions[0];
        this.setState({ positions: [initialPosition, ...data] });
      });
  };

  getSelectedPosition = () => {
    const { positions } = this.state;
    const selectedPosition = positions.find(item => item.selected === true);
    this.setState({ headerPosition: selectedPosition.name });
  };

  render() {
    const {
      data,
      showButton,
      name,
      email,
      phone,
      positions,
      photo,
      usersListHeigthDisabled,
      isModalOpen,
      nameValid,
      mailValid,
      phoneValid,
      formValid,
      headerPosition,
    } = this.state;

    return (
      <div className={style.appWrap}>
        <AppHeader />
        <main className={style.main}>
          <HeadSection />
          <AboutSection />
          <RelationshipSection />
          <RequirementsSection />
          <UsersSection
            usersListHeigthDisabled={usersListHeigthDisabled}
            users={data}
            handleShowMore={this.handleShowMoreClick}
            showButton={showButton}
          />
          <SignUpSection
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleFileInput={this.handleFileInput}
            enable={formValid}
            headerPosition={headerPosition}
            resetThenSet={this.resetThenSet}
            positions={positions}
            isModalOpen={isModalOpen}
            onCloseModal={this.closeModal}
            nameValid={nameValid}
            mailValid={mailValid}
            phoneValid={phoneValid}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

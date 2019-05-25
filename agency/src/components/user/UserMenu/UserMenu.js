import React, { Component } from 'react';
import icons from '../../../assets/img/icons.svg';

import Modal from '../../modal/Modal';
import Avatar from '../Avatar/Avatar';
import Navigation from '../../Navigation/Navigation';
import navItems from '../../../configs/main-nav';

import s from './UserMenu.module.scss';
import avatarStyles from '../Avatar/Avatar.module.scss';
import modalStyles from '../../modal/modal.module.scss';
import * as API from '../../../services/api';

const SignoutSvg = ({ name }) => (
  <div className={s.signoutSvgWrap}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={s.signoutSvg}
    >
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  </div>
);

const MenuSvg = ({ name }) => (
  <div className={s.menuSvgWrap}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={s.menuSvg}
    >
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  </div>
);

const userId = {
  id: '1',
};

export default class UserMenu extends Component {
  state = {
    isModalOpen: false,
    usersData: {},
    name: '',
    email: '',
    photo: '',
    phone: '',
    id: '',
    position: '',
    position_id: '',
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  getUser = id => {
    API.getUserById(id)
      .then(userData => userData.user)
      .then(userData => {
        this.setState({ ...userData });
      });
  };

  componentDidMount() {
    this.getUser(userId.id);
  }

  render() {
    const { isModalOpen, name, email, photo } = this.state;

    return (
      <div className={s.container}>
        <div className={s.userNameWrap}>
          <span className={s.name}>{name}</span>
          <span className={s.mail}> {email} </span>
        </div>
        <a className={s.userLink} href="#">
          <Avatar image={photo} avatarClass={avatarStyles.avatar} />
        </a>
 
        <button className={s.signoutButton}>
          <SignoutSvg name="icon-sign-out" />
        </button>
        <button className={s.openModal} onClick={this.openModal}>
          <MenuSvg name="icon-line-menu" />
        </button> 
        {isModalOpen && (
          <Modal
            onClose={this.closeModal}
            modalBackdrop={modalStyles.backdrop}
            modalClass={modalStyles.modal} 
          >
            <div className={s.modal}>
              <div className={s.dropdownUserWrap}>
                <a className={s.userLink} href="#">
                  <Avatar image={photo} avatarClass={avatarStyles.dropAvatar} />
                </a>
                <div className={s.dropdownUserNameWrap}>
                  <span className={s.dropdownName}>{name}</span>
                  <span className={s.dropdownMail}> {email} </span>
                </div>
              </div>
              <div className={s.navigationWrap}>
                <Navigation
                  items={navItems}
                  listClass={s.dropdownList}
                  itemClass={s.dropdownItem}
                  linkClass={s.dropdownLink}
                />
                <button type="button" className={s.signOut}>
                  Sign Out
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

import React from 'react'

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import UserMenu from '../../components/user/UserMenu/UserMenu'

import avatar from '../../assets/img/user-alexander-2x.jpg'
import navItems from '../../configs/main-nav'

import s from './AppHeader.module.scss';

const AppHeader = (props) => {
  const {handleClick, closeMenu,isMenuOpen, openMenu} =props;
  return(
  <header className={s.header}>
    <div className={s.contentContainer}>
      <Logo name='icon-logo' iconClass={s.icon} />
      <Navigation
        items={navItems}
        listClass={s.list}
        itemClass={s.item}
        linkClass={s.link} />
      <div className={s.usermenu}>
        <UserMenu 
        avatar={avatar} 
        handleClick={handleClick}
        closeMenu={closeMenu}
        isMenuOpen={isMenuOpen} 
        openMenu={openMenu}
         />
      </div>
    </div>
  </header>
)}

export default AppHeader

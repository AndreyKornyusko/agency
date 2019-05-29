import React from 'react';

import styles from './Footer.module.scss';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import navItems from '../../configs/main-nav';
import Contacts from './Contacts/Contacts';
import footerContacts from '../../configs/footer-contacts';
import Menu from './Menu/Menu';
import menuFirstCol from '../../configs/footer-menu-firstCol';
import menuSecondCol from '../../configs/footer-menu-secondCol';
import menuThirdCol from '../../configs/footer-menu-thirdCol';
import menuFourthCol from '../../configs/footer-menu-fourthCol';
import IconMenu from './IconMenu/IconMenu';
import iconMenuItems from '../../configs/footer-iconMenu';

const Footer = () => (
  <footer className={styles.footer}>
    <header className={styles.footerHeader}>
      <div className={styles.container}>
        <Logo
          name="icon-logo"
          iconClass={styles.logo}
          logoLink={styles.logoLink}
        />
        <Navigation
          items={navItems}
          listClass={styles.navList}
          itemClass={styles.navItem}
          linkClass={styles.navLink}
        />
      </div>
    </header>
    <div className={styles.footerMain}>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <Contacts
            items={footerContacts}
            listClass={styles.contactList}
            itemClass={styles.contactItemClass}
            svgWrap={styles.contactSvgWrap}
            contactItemText={styles.contactItemText}
            contactWrapClass={styles.contactItemWrap}
          />
        </div>
        <div className={styles.footerMenu}>
          <Menu
            items={menuFirstCol}
            listClass={styles.footerMenuList}
            itemClass={styles.footerMenuColItem}
            linkClass={styles.footerMenuItemLink}
          />
          <Menu
            items={menuSecondCol}
            listClass={styles.footerMenuList}
            itemClass={styles.footerMenuColItem}
            linkClass={styles.footerMenuItemLink}
          />
          <Menu
            items={menuThirdCol}
            listClass={styles.footerMenuList}
            itemClass={styles.footerMenuColItem}
            linkClass={styles.footerMenuItemLink}
          />
          <Menu
            items={menuFourthCol}
            listClass={styles.footerMenuList}
            itemClass={styles.footerMenuColItem}
            linkClass={styles.footerMenuItemLink}
          />
        </div>
      </div>
    </div>
    <footer className={styles.footerFooter}>
      <div className={styles.container}>
        <div className={styles.networks}>
          <IconMenu
            items={iconMenuItems}
            listClass={styles.iconMenuList}
            itemClass={styles.iconMenuItem}
            iconClass={styles.iconMenuIcon}
          />
        </div>
        <div className={styles.copywrite}>
          <a href="#">
            <span className={styles.copywriteText}>
              &#169; abz.agency specially for the test task
            </span>
          </a>
        </div>
      </div>
    </footer>
  </footer>
);

export default Footer; 

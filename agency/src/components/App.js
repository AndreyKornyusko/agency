import React from 'react';

import AppHeader from './AppHeader/AppHeader';
import style from './styles.module.scss';
import HeadSection from '../components/HeadSection/HeadSection';
import AboutSection from '../components/AboutSection/AboutSection';
import RelationshipSection from '../components/RelationshipSection/RelationshipSection';
import RequirementsSection from '../components/RequirementsSection/RequirementsSection';
import UsersSectionContainer from '../components/UsersSection/UsersSectionContainer';
import SignUpSection from '../components/SignUpSection/SignUpSection';
import Footer from '../components/Footer/Footer';
const App = () => (
  <div className={style.appWrap}>
    <AppHeader />
    <main className={style.main}>
      <HeadSection />
      <AboutSection />
      <RelationshipSection />
      <RequirementsSection/> 
      <UsersSectionContainer/>
      <SignUpSection/>
      <Footer/>
    </main>
  </div>
);

export default App;

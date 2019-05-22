import React, { Component, createRef } from 'react';

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
  position_id: 1,
  positions: [{ id: 1, name: 'Select your position', selected: false }],

  phone: '',
  photo: '',
  baseUrl:
    'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
  resetPageUrl:
    'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
};

class App extends Component {
  // containerRef = createRef();

  state = {
    ...INITIAL_STATE,
    token: '',
    data: [],
    nextUrl: '',

    showButton: true,
    usersListHeigthDisabled: false,
  };

  componentDidMount() {
    // window.addEventListener('click', this.handleWindowClick);

    this.getUsers(this.state.baseUrl);

    API.getToken().then(data => {
      this.setState({ token: data });
    });

    API.getPositions()
    .then(data => data.positions)
    .then(data => {
      this.setState({ positions: [...data] });
    });
  }

  // componentWillUnmount() {
  //   window.removeEventListener('click', this.handleWindowClick);
  // }

  resetThenSet = id => {
    let temp = this.state.positions;
    // console.log('temp', temp);
    temp.forEach(item => (item.selected = false));
    // console.log('temp.1', temp[0]);
    temp[Number(id) - 1].selected = true;
    this.setState({
      positions: temp,
    });
  };

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

  };

  // resetForm() {
  //   this.setState({ ...INITIAL_STATE });
  // }

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
    console.log('this.state', this.state);

    API.PostUser(position_id, name, email, phone, photo, token).then(data => {
      if (data.success) {
        this.getUsers(this.state.resetPageUrl);
      }
    });
    // this.resetForm();

    e.target.reset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFileInput = () => {
    const fileField = document.querySelector('input[type="file"]');
    this.setState({ photo: fileField.files[0] });
  };

  render() {
    const {
      data,
      showButton,
      name,
      email,
      phone,
      position_id,
      positions,
      photo,
      usersListHeigthDisabled,
    } = this.state;
    const { handleSubmit, handleChange, handleFileInput } = this.props;

    const enable =
      // position_id.length > 0 &&
      name.length > 0 && email.length > 0 && phone.length > 0 && photo !== '';

    return (
      <div className={style.appWrap}
      //  ref={this.containerRef}
       >
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
            enable={enable}
            currentPosition={positions[0].name}
            resetThenSet={this.resetThenSet}
            positions={positions}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import UsersViev from './UsersSectionViev';

import * as API from '../../services/api';

const INITIAL_STATE= {
  baseUrl:
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
}

export default class UsersSectionContainer extends Component {
  state = {
    ...INITIAL_STATE,
    data: [],
    nextUrl: '',
    showButton: true,
  };

  componentDidMount() {
    API.getUsers(this.state.baseUrl)
      .then(data => data.users)
      .then(data => this.setState({ data }));
  }

  handleShowMoreClick = () => {
    if (this.state.baseUrl) {
      API.getUsers(this.state.baseUrl).then(data => {
        const nextUrl = data.links.next_url;
        if (nextUrl) {
          this.setState({ baseUrl: nextUrl });

          API.getUsers(nextUrl)
            .then(data => data.users)
            .then(users => {
              this.setState({ data: [...this.state.data, ...users] });
            });
        } else {this.setState(prewState=>({showButton:!prewState.showButton}))}
      });
    }
  };

  render() {
    const { data, showButton } = this.state;

    return <UsersViev users={data} handleShowMore={this.handleShowMoreClick} showButton={showButton}/>;
  }
}

import React, { Component } from 'react';

import s from './Select.module.scss';

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOpen: false,
      headerPosition: this.props.currentPosition,
    };
  }

  SelectItem = (position, id) => {
    this.setState(
      {
        listOpen: false,
        headerPosition: position,
      },
      this.props.resetThenSet(id),
    );
  };

  toggleList = () => {
    this.setState(prevState => ({ listOpen: !prevState.listOpen }));
  };

  render() {
    const { headerPosition, listOpen } = this.state;
    const { positions, resetThenSet } = this.props;

    return (
      <div className={s.select}>
        <div className={s.selectHeader} onClick={this.toggleList}>
          {headerPosition}
        </div>
        {listOpen && (
          <ul className={s.selectDropdown} onClick={e => e.stopPropagation()}>
            {positions.map(item => (
              <li
                className={s.selectDropdownItem}
                key={item.id}
                onClick={() => this.SelectItem(item.name, item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

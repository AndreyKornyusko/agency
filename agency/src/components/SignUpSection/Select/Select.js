import React, { Component, createRef } from 'react';

import s from './Select.module.scss';
import icons from '../../../assets/img/icons.svg';

const SelectArrow = ({ name }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={s.caretDownSvg}
  >
    <use xlinkHref={`${icons}#${name}`} />
  </svg>
);

export default class Select extends Component {
  containerRef = createRef();

  static defaultProps = {
    headerPosition: 'Select your position',
  };

  state = {
    listOpen: false,
    headerPosition: this.props.headerPosition,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { listOpen } = this.state;

    return nextState.listOpen !== listOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { listOpen } = this.state;
    if (listOpen && !isTargetInsideContainer) {
      this.toggleList();
    }
  };

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
      <div className={s.select} ref={this.containerRef}>
        <div className={s.selectHeader} onClick={this.toggleList}>
          <span className={s.selectHeaderPosition}>{headerPosition}</span>
          <div className={s.caretWrap}>
            <SelectArrow name="icon-caret-down" />
          </div>
        </div>
        {listOpen && (
          <ul className={s.selectDropdown} onClick={e => e.stopPropagation()}>
            {positions.map(item => (
              <li
                className={
                  !item.id
                    ? s.initialItemStyle
                    : item.selected
                    ? s.selectDropdownItemSelected
                    : s.selectDropdownItem
                }
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

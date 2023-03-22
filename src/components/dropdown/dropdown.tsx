import React, { Component, ReactNode, RefObject } from 'react';
import { v1 as uuidv1 } from 'uuid';
import './dropdown.scss';
import { IDropdownProps, IDropdownState } from './interfaces';

export default class Dropdown extends Component<IDropdownProps, IDropdownState> {
  currentValue: RefObject<HTMLInputElement>;
  constructor(props: IDropdownProps) {
    super(props);
    this.state = {
      list: false,
      currentItem: '',
    };
    this.currentValue = React.createRef();
  }

  setCurrentValue(curentRow: EventTarget): void {
    if (!this.currentValue.current || !(curentRow instanceof HTMLLIElement)) return;
    this.currentValue.current.value = curentRow.dataset.dropdownRow || '';
  }

  render(): ReactNode {
    return (
      <div onClick={() => this.setState({ list: !this.state.list })} className="dropdown">
        <input
          ref={this.currentValue}
          defaultValue={this.props.dropdownList[0]}
          type="text"
          className="dropdown__current"
          disabled
        />
        <ul
          onClick={(event) => this.setCurrentValue(event.target)}
          className={`dropdown__list ${this.state.list ? 'dropdown__show' : ''}`}
        >
          {this.props.dropdownList.map((row) => (
            <li data-dropdown-row={row} key={uuidv1()}>
              {row}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

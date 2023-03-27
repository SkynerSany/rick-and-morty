import { Component, ReactNode } from 'react';
import { v1 as uuidv1 } from 'uuid';
import './dropdown.scss';
import { IDropdownProps, IDropdownState } from './interfaces';

export default class Dropdown extends Component<IDropdownProps, IDropdownState> {
  constructor(props: IDropdownProps) {
    super(props);
    this.state = {
      list: false,
      currentItem: '',
    };
  }

  setCurrentValue(curentRow: EventTarget): void {
    if (!this.props.dropdownRef.current || !(curentRow instanceof HTMLLIElement)) return;
    this.props.dropdownRef.current.value = curentRow.dataset.dropdownRow || '';
  }

  render(): ReactNode {
    return (
      <div onClick={() => this.setState({ list: !this.state.list })} className="dropdown">
        <input
          ref={this.props.dropdownRef}
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

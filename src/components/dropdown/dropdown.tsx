import { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import './dropdown.scss';
import { IDropdownProps } from './dropdown-interfaces';
import { TRefInput } from '../../basic-types';

function setCurrentValue(curentRow: EventTarget, dropdownRef: TRefInput): void {
  if (!dropdownRef.current || !(curentRow instanceof HTMLLIElement)) return;
  dropdownRef.current.value = curentRow.dataset.dropdownRow || '';
}

export default function Dropdown({ dropdownList, dropdownRef }: IDropdownProps): JSX.Element {
  const [list, setList] = useState(false);

  return (
    <div onClick={() => setList(!list)} className="dropdown">
      <input ref={dropdownRef} type="text" className="dropdown__current" disabled />
      <ul
        onClick={(event) => setCurrentValue(event.target, dropdownRef)}
        className={`dropdown__list ${list ? 'dropdown__show' : ''}`}
      >
        {dropdownList.map((row) => (
          <li data-dropdown-row={row} key={uuidv1()}>
            {row}
          </li>
        ))}
      </ul>
    </div>
  );
}

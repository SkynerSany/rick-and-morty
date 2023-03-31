import { useState } from 'react';
import { v1 } from 'uuid';
import './dropdown.scss';
import { IDropdownProps } from './dropdown-interfaces';

export default function Dropdown({ dropdownList, register, valid }: IDropdownProps): JSX.Element {
  const [list, setList] = useState(false);
  const [current, setCurrent] = useState('');

  return (
    <div className="dropdown">
      <input
        type="text"
        className="dropdown__current"
        onClick={() => setList(!list)}
        value={current}
        {...register('country', {
          validate: () => valid(current),
        })}
        readOnly
      />
      <ul
        onClick={(event) =>
          setCurrent((event.target as HTMLInputElement).dataset.dropdownRow || '')
        }
        className={`dropdown__list ${list ? 'dropdown__show' : ''}`}
      >
        {dropdownList.map((row) => (
          <li data-dropdown-row={row} key={v1()}>
            {row}
          </li>
        ))}
      </ul>
    </div>
  );
}

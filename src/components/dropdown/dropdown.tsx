import { useRef, useState } from 'react';
import { v1 } from 'uuid';
import './dropdown.scss';
import { IDropdownProps } from './dropdown-interfaces';

export default function Dropdown({
  dropdownList,
  register,
  valid,
  trigger,
  setValue,
}: IDropdownProps): JSX.Element {
  const [list, setList] = useState(false);
  const current = useRef('');

  function setCurrent(target: EventTarget) {
    current.current = (target as HTMLInputElement).dataset.dropdownRow || '';
    setValue('country', current.current);
    trigger('country');
  }

  return (
    <div className="dropdown">
      <input
        type="text"
        className="dropdown__current"
        onClick={() => setList(!list)}
        {...register('country', {
          validate: () => valid(current.current),
        })}
        readOnly
      />
      <ul
        onClick={(event) => setCurrent(event.target)}
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

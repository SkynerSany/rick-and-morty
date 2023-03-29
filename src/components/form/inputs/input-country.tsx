import React from 'react';
import Dropdown from '../../dropdown/dropdown';

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
  validation: boolean;
}

const COUNTRY_LIST = ['Belarus', 'Russia', 'USA', 'Italy'];

export default function InputCountry({ inputRef, validation }: IProps) {
  return (
    <div className="input__wrapper">
      <label className="input-label">
        Your country
        <Dropdown dropdownList={COUNTRY_LIST} dropdownRef={inputRef} />
      </label>
      {validation || <p className="input-error">Select one country</p>}
    </div>
  );
}

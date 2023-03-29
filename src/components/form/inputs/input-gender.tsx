import React from 'react';

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function InputGender({ inputRef }: IProps) {
  return (
    <div className="input__wrapper">
      <label className="input-label">
        Gender
        <div className="form__switcher">
          <input ref={inputRef} type="checkbox" className="switcher" />
          <div className="knobs"></div>
        </div>
      </label>
    </div>
  );
}

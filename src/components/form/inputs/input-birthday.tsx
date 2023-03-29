import React from 'react';

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
  validation: boolean;
}

export default function InputBirthday({ inputRef, validation }: IProps) {
  return (
    <div className="input__wrapper">
      <label className="input-label">
        Your birthday
        <input ref={inputRef} type="date" className="form__birthday" />
      </label>
      {validation || (
        <p className="input-error">Date of birth cannot be greater than the current date</p>
      )}
    </div>
  );
}

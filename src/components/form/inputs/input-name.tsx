import React from 'react';

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
  validation: boolean;
}

export default function InputName({ inputRef, validation }: IProps) {
  return (
    <div className="input__wrapper">
      <label className="input-label">
        Your name
        <input ref={inputRef} type="text" className="form__name" />
      </label>
      {validation || (
        <p className="input-error">
          First name and last name must start with a capital letter, last name contains more than
          two characters.
        </p>
      )}
    </div>
  );
}

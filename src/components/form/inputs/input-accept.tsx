import React from 'react';

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
  validation: boolean;
}

export default function InputAccept({ inputRef, validation }: IProps) {
  return (
    <div className="input__wrapper">
      <label className="checkbox__accept">
        <input ref={inputRef} type="checkbox" className="form__radio" defaultChecked={true} />I
        confirm that I am a cute cat
      </label>
      {validation || <p className="input-error">You must agree</p>}
    </div>
  );
}

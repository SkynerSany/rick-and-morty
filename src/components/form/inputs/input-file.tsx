import React from 'react';

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
  validation: boolean;
}

export default function InputFile({ inputRef, validation }: IProps) {
  return (
    <div className="input__wrapper">
      <input ref={inputRef} type="file" className="form__file" accept="image/*" />
      {validation || <p className="input-error">You can load only images</p>}
    </div>
  );
}

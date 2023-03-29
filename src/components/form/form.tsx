import { useState } from 'react';
import { IFormProps } from './form-interfaces';
import './form.scss';
import InputHeard from './inputs/input-heard';
import { DEFAULT_VALID_LIST, inputList } from './inputs/inputs-list';
import InputName from './inputs/input-name';
import InputBirthday from './inputs/input-birthday';
import InputCountry from './inputs/input-country';
import InputGender from './inputs/input-gender';
import InputFile from './inputs/input-file';
import InputAccept from './inputs/input-accept';
import { submitForm } from './form-events';

export default function Form({ setForm }: IFormProps): JSX.Element {
  const [inputValid, setInputValid] = useState(DEFAULT_VALID_LIST);

  return (
    <form
      ref={inputList.form}
      onSubmit={(event) => submitForm({ event, inputList, setForm, inputValid, setInputValid })}
      className="form"
    >
      <div className="form-wrapper">
        <InputName inputRef={inputList.name} validation={inputValid.name} />
        <div className="form__two-columns">
          <InputBirthday inputRef={inputList.birthday} validation={inputValid.birthday} />
          <InputCountry inputRef={inputList.country} validation={inputValid.country} />
          <InputGender inputRef={inputList.gender} />
        </div>
        <InputHeard inputRef={inputList.heard} validation={inputValid.heard} />
        <InputFile inputRef={inputList.image} validation={inputValid.image} />
        <button className="form-submit">Submit</button>
        <InputAccept inputRef={inputList.accept} validation={inputValid.accept} />
      </div>
    </form>
  );
}

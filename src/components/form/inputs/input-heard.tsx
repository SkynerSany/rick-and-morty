import { v1 } from 'uuid';
import { IInputHeard } from './inputs-list';

interface IInputRadioProps {
  inputRef: React.RefObject<HTMLInputElement>;
  name: string;
}

interface IInputHeardProps {
  inputRef: IInputHeard;
  validation: boolean;
}

const CITES_LIST = ['yandex', 'google', 'youtube'];

function InputRadio({ inputRef, name }: IInputRadioProps) {
  return (
    <label className="checkbox__row">
      <input ref={inputRef} type="radio" name="heard" className="form__radio" data-heard={name} />
      {name}
    </label>
  );
}

export default function InputHeard({ inputRef, validation }: IInputHeardProps): JSX.Element {
  return (
    <fieldset className="checkbox input__wrapper">
      <legend>Where you heard about us</legend>
      {CITES_LIST.map((cite) => (
        <InputRadio inputRef={inputRef[cite]} name={cite} key={v1()} />
      ))}
      {validation || <p className="input-error">Select at least one source</p>}
    </fieldset>
  );
}

import { useRef } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import { v1 } from 'uuid';
import { IInputProps } from '../form-interfaces';

interface IInputRadioProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  isChecked: React.MutableRefObject<boolean>;
}

const CITES_LIST = ['yandex', 'google', 'youtube'];

function InputRadio(props: IInputRadioProps): JSX.Element {
  const { register, name, isChecked } = props;
  return (
    <label className="checkbox__row">
      <input
        onClick={() => {
          isChecked.current = true;
        }}
        value={name}
        type="radio"
        className="form__radio"
        {...register('heard', {
          validate: () => isChecked.current,
        })}
      />
      {name}
    </label>
  );
}

export default function InputHeard({ register, errors }: IInputProps): JSX.Element {
  const isChecked = useRef(false);

  return (
    <fieldset className="checkbox input__wrapper">
      <legend>Where you heard about us</legend>
      {CITES_LIST.map((cite) => (
        <InputRadio register={register} name={cite} isChecked={isChecked} key={v1()} />
      ))}
      {errors.heard && <p className="input-error">Select at least one source</p>}
    </fieldset>
  );
}

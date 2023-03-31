import { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import { v1 } from 'uuid';
import { IInputProps } from '../form-interfaces';

interface IInputRadioProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CITES_LIST = ['yandex', 'google', 'youtube'];

function InputRadio(props: IInputRadioProps): JSX.Element {
  const { register, name, isChecked, setIsChecked } = props;
  return (
    <label className="checkbox__row">
      <input
        onClick={() => setIsChecked(true)}
        value={name}
        type="radio"
        className="form__radio"
        {...register('heard', {
          validate: () => isChecked,
        })}
      />
      {name}
    </label>
  );
}

export default function InputHeard({ register, errors }: IInputProps): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <fieldset className="checkbox input__wrapper">
      <legend>Where you heard about us</legend>
      {CITES_LIST.map((cite) => (
        <InputRadio
          register={register}
          name={cite}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          key={v1()}
        />
      ))}
      {errors.heard && <p className="input-error">Select at least one source</p>}
    </fieldset>
  );
}

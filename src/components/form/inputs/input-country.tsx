import { FieldValues, UseFormSetValue, UseFormTrigger } from 'react-hook-form';
import Dropdown from '../../dropdown/dropdown';
import { IInputProps } from '../form-interfaces';

const COUNTRY_LIST = ['Belarus', 'Russia', 'USA', 'Italy'];

interface IInputProp extends IInputProps {
  trigger: UseFormTrigger<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

export function isCountry(value: string) {
  if (value === '') return false;
  return true;
}

export default function InputCountry({ register, errors, trigger, setValue }: IInputProp) {
  return (
    <div className="input__wrapper">
      <label className="input-label">
        Your country
        <Dropdown
          dropdownList={COUNTRY_LIST}
          register={register}
          valid={isCountry}
          trigger={trigger}
          setValue={setValue}
        />
      </label>
      {errors.country && <p className="input-error">Select one country</p>}
    </div>
  );
}

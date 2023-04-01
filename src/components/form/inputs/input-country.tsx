import Dropdown from '../../dropdown/dropdown';
import { IInputProps } from '../form-interfaces';

const COUNTRY_LIST = ['Belarus', 'Russia', 'USA', 'Italy'];

export function isCountry(value: string) {
  if (value === '') return false;
  return true;
}

export default function InputCountry({ register, errors }: IInputProps) {
  return (
    <div className="input__wrapper">
      <label className="input-label">
        Your country
        <Dropdown dropdownList={COUNTRY_LIST} register={register} valid={isCountry} />
      </label>
      {errors.country && <p className="input-error">Select one country</p>}
    </div>
  );
}

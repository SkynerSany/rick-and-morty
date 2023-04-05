import { IInputProps } from '../form-interfaces';

export function isBirthday(value: string) {
  if (value === '') return false;
  if (new Date() < new Date(value)) return false;
  return true;
}

export default function InputBirthday({ register, errors }: IInputProps) {
  return (
    <div className="input__wrapper">
      <label className="input-label">
        Your birthday
        <input
          type="date"
          className="form__birthday"
          {...register('birthday', {
            required: 'Field must be filled',
            validate: (value: string) => isBirthday(value),
          })}
        />
      </label>
      {errors.birthday && (
        <p className="input-error">Date of birth cannot be greater than the current date</p>
      )}
    </div>
  );
}

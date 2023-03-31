import { IInputProps } from '../form-interfaces';

export default function InputName({ register, errors }: IInputProps) {
  return (
    <div className="input__wrapper">
      <label className="input-label">
        Your name
        <input
          type="text"
          className="form__name"
          {...register('name', {
            required: true,
            pattern:
              /[A-Z\u0410-\u042f]{1}[a-z\u0430-\u044f]+\s[A-Z\u0410-\u042f]{1}[a-z\u0430-\u044f]{1,}$/,
          })}
        />
      </label>
      {errors.name && (
        <p className="input-error">
          First name and last name must start with a capital letter, last name contains more than
          two characters.
        </p>
      )}
    </div>
  );
}

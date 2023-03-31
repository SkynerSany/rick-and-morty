import { IInputProps } from '../form-interfaces';

export default function InputAccept({ register, errors }: IInputProps) {
  return (
    <div className="input__wrapper">
      <label className="checkbox__accept">
        <input
          type="checkbox"
          className="form__radio"
          defaultChecked={true}
          {...register('accept', {
            required: true,
          })}
        />
        I confirm that I am a cute cat
      </label>
      {errors.accept && <p className="input-error">You must agree</p>}
    </div>
  );
}

import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

interface IProps {
  register: UseFormRegister<FieldValues>;
}

export default function InputGender({ register }: IProps) {
  return (
    <div className="input__wrapper">
      <label className="input-label">
        Gender
        <div className="form__switcher">
          <input type="checkbox" className="switcher" {...register('gender')} />
          <div className="knobs"></div>
        </div>
      </label>
    </div>
  );
}

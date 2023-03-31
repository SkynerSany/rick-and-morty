import { IForm, IFormProps } from './form-interfaces';
import './form.scss';
import InputHeard from './inputs/input-heard';
import InputName from './inputs/input-name';
import InputBirthday from './inputs/input-birthday';
import InputCountry from './inputs/input-country';
import InputGender from './inputs/input-gender';
import InputFile from './inputs/input-file';
import InputAccept from './inputs/input-accept';
import { submitForm } from './form-events';
import { FieldValues, useForm } from 'react-hook-form';

export default function Form({ setForm }: IFormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: FieldValues) => {
    submitForm(data as IForm, setForm);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-wrapper">
        <InputName register={register} errors={errors} />
        <div className="form__two-columns">
          <InputBirthday register={register} errors={errors} />
          <InputCountry register={register} errors={errors} />
          <InputGender register={register} />
        </div>
        <InputHeard register={register} errors={errors} />
        <InputFile register={register} errors={errors} />
        <button className="form-submit">Submit</button>
        <InputAccept register={register} errors={errors} />
      </div>
    </form>
  );
}

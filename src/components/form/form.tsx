import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { IForm } from './form-interfaces';
import './form.scss';
import InputHeard from './inputs/input-heard';
import InputName from './inputs/input-name';
import InputBirthday from './inputs/input-birthday';
import InputCountry from './inputs/input-country';
import InputGender from './inputs/input-gender';
import InputFile from './inputs/input-file';
import InputAccept from './inputs/input-accept';
import { saveForm } from './form-events';
import { addForm } from '../../redux/reducers';
import { AppContext } from '../layout/layout';

export default function Form(): JSX.Element {
  const message = useContext(AppContext);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data: FieldValues) => {
    dispatch(addForm(saveForm(data as IForm)));
    message({
      type: 'info',
      text: 'Form has been submited',
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-wrapper">
        <InputName register={register} errors={errors} />
        <div className="form__two-columns">
          <InputBirthday register={register} errors={errors} />
          <InputCountry register={register} errors={errors} trigger={trigger} setValue={setValue} />
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

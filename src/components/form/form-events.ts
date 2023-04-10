import { IForm, IFormSubmitProps } from './form-interfaces';

export function saveForm(form: IForm): IFormSubmitProps {
  return {
    name: form.name,
    birthday: form.birthday,
    country: form.country,
    gender: form.gender ? 'Female' : 'Male',
    heard: form.heard,
    file: URL.createObjectURL(form.file[0]),
  };
}

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

export function saveFormInLocal(form: IForm): void {
  const newForm = saveForm(form);
  if (localStorage.forms) {
    localStorage.forms = JSON.stringify([...JSON.parse(localStorage.forms), newForm]);
  } else {
    localStorage.setItem('forms', JSON.stringify([newForm]));
  }
}

export function submitForm(form: IForm, setForm: () => void): void {
  saveFormInLocal(form);
  setForm();
}

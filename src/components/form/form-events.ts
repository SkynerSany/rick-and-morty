import { IForm, IFormSubmitProps, TUseStateInput } from './form-interfaces';
import { validateInput } from './inputs/inputs-validation';
import { DEFAULT_VALID_LIST, IInputList } from './inputs/inputs-list';

function saveForm(inputList: IInputList): IForm {
  const heard: string[] = Object.values(inputList.heard)
    .map((input) => input.current)
    .filter((input) => input?.checked)
    .map((input) => input?.dataset.heard || '');

  return {
    name: inputList.name.current?.value || '',
    birthday: inputList.birthday.current?.value || '',
    country: inputList.country.current?.value || '',
    gender: inputList.gender.current?.checked ? 'Female' : 'Male',
    heard: heard,
    image: URL.createObjectURL(inputList.image.current!.files![0]),
  };
}

export function submitForm(props: IFormSubmitProps): void {
  props.event.preventDefault();
  props.setInputValid(DEFAULT_VALID_LIST);
  if (!validateForm(props.inputList, props.setInputValid)) return;

  saveFormInLocal(props.inputList);
  props.setForm();
  props.inputList.form.current?.reset();
}

function saveFormInLocal(inputList: IInputList): void {
  const newForm = saveForm(inputList);
  if (localStorage.forms) {
    localStorage.forms = JSON.stringify([...JSON.parse(localStorage.forms), newForm]);
  } else {
    localStorage.setItem('forms', JSON.stringify([newForm]));
  }
}

function validateForm(inputList: IInputList, setInputValid: TUseStateInput): boolean {
  const errors = {
    name: validateInput.name(inputList.name),
    birthday: validateInput.birthday(inputList.birthday),
    country: validateInput.country(inputList.country),
    heard: validateInput.heard(Object.values(inputList.heard)),
    image: validateInput.file(inputList.image),
    accept: validateInput.accept(inputList.accept),
  };

  setInputValid(errors);
  return Object.values(errors).filter((error) => error === false).length > 0 ? false : true;
}

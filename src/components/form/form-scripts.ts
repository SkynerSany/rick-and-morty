import { IForm } from './form-interfaces';

function saveForm(form: HTMLFormElement): IForm | void {
  const inputs = Array.from(form.elements) as HTMLInputElement[];
  const heardInputs = Array.from(inputs[4].querySelectorAll('input'));
  const heard: string[] = heardInputs
    .filter((input) => input.checked)
    .map((input) => input.dataset.heard || '');

  return {
    name: inputs[0].value,
    birthday: inputs[1].value,
    country: inputs[2].value,
    gender: inputs[3].checked ? 'Female' : 'Male',
    heard: heard,
    image: URL.createObjectURL(inputs[inputs.length - 2].files![0]),
  };
}

export function getDate(): string {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;
}

export function submitForm(event: React.FormEvent, setForm: () => void): void {
  event.preventDefault();
  if (!(event.currentTarget instanceof HTMLFormElement)) return;

  const newForm = saveForm(event.currentTarget);
  if (localStorage.forms) {
    localStorage.forms = JSON.stringify([...JSON.parse(localStorage.forms), newForm]);
  } else {
    localStorage.setItem('forms', JSON.stringify([newForm]));
  }

  setForm();
  event.currentTarget.reset();
}

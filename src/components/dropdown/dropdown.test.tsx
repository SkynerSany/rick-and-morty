import { render, screen } from '@testing-library/react';
import Dropdown from './dropdown';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { isCountry } from '../form/inputs/input-country';
import { FieldValues, UseFormRegister, UseFormTrigger } from 'react-hook-form';

const dropdownList = ['first', 'second'];

function register(name: string) {
  name;
}

async function trigger(name: string) {
  return new Promise((resolve) => resolve(name));
}

function setValue(_: string, text: string) {
  const input = document.querySelector('.dropdown__current');
  if (!(input instanceof HTMLInputElement)) return;
  input.value = text;
}

test('Dropdown render', () => {
  render(
    <Dropdown
      dropdownList={dropdownList}
      register={register as UseFormRegister<FieldValues>}
      valid={isCountry}
      trigger={trigger as UseFormTrigger<FieldValues>}
      setValue={setValue}
    />
  );
  expect(screen.getByText(dropdownList[0])).toBeInTheDocument();
});

test('Dropdown set current', async () => {
  const wrapper = render(
    <Dropdown
      dropdownList={dropdownList}
      register={register as UseFormRegister<FieldValues>}
      valid={isCountry}
      trigger={trigger as UseFormTrigger<FieldValues>}
      setValue={setValue}
    />
  );
  const user = userEvent.setup();

  await user.click(wrapper.container);
  await user.click(screen.getByText(dropdownList[1]));
  expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe(dropdownList[1]);
});

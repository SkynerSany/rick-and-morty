import { fireEvent, render, screen } from '@testing-library/react';
import { test, vi } from 'vitest';
import { IForm } from '../form/form-interfaces';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Form from './form';
import { act } from 'react-dom/test-utils';

const localStorageMock = (() => {
  const store: { [key: string]: string } = {};
  return {
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    getItem: vi.fn((key: string) => {
      return store[key] || null;
    }),
    getStore: () => store,
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

const mockSetForm = () => {
  const state: { forms: IForm[] } = {
    forms: [],
  };
  state.forms = JSON.parse(localStorage.forms);
};

const formCardData: IForm = {
  name: 'Alex Breed',
  birthday: '2023-02-22',
  country: 'Belarus',
  gender: 'Male',
  heard: ['YouTube', 'Yandex'],
  image: '',
};

test('Form render', () => {
  const wrapper = render(<Form setForm={mockSetForm} />);

  expect(wrapper.getByText('Your name')).toBeInTheDocument();
});

test('Form save', async () => {
  const wrapper = render(<Form setForm={mockSetForm} />);

  const inputs = wrapper.container.querySelectorAll('input');
  fireEvent.change(inputs[7], {
    target: {
      files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
    },
  });
  inputs[0].value = formCardData.name;
  inputs[1].value = formCardData.birthday;
  inputs[2].value = formCardData.country;
  inputs[3].checked = false;
  inputs[4].checked = true;
  inputs[5].checked = true;

  const user = userEvent.setup();
  await user.click(screen.getByText('Submit'));

  await act(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(true), 100));
  });

  expect(localStorage.getStore()).toBe('1');
});

import { render } from '@testing-library/react';
import { test, vi } from 'vitest';
import { IForm } from '../form/form-interfaces';
import '@testing-library/jest-dom';
import Form from './form';

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

test('Form render', () => {
  const wrapper = render(<Form setForm={mockSetForm} />);

  expect(wrapper.getByText('Your name')).toBeInTheDocument();
});

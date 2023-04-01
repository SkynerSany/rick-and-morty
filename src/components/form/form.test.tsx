import { fireEvent, render } from '@testing-library/react';
import { test, vi } from 'vitest';
import { IForm } from './form-interfaces';
import '@testing-library/jest-dom';
import Form from './form';
import { isBirthday } from './inputs/input-birthday';
import { isImage } from './inputs/input-file';

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
  expect(wrapper.container.querySelector('.form')).toBeInTheDocument();
});

test('Input name render', async () => {
  const wrapper = render(<Form setForm={mockSetForm} />);

  expect(wrapper.getByText('Your name')).toBeInTheDocument();

  const input = wrapper.container.querySelector('.form__name');
  if (!input) throw new Error();

  fireEvent.change(input, { target: { value: 'фыв' } });
  await new Promise((resolve) => setTimeout(() => resolve(true), 100));
  expect(wrapper.container.querySelector('.input-error')).toBeInTheDocument();
});

test('Input birthday render', async () => {
  const wrapper = render(<Form setForm={mockSetForm} />);

  expect(wrapper.getByText('Your birthday')).toBeInTheDocument();

  const input = wrapper.container.querySelector('.form__birthday');
  if (!input) throw new Error();

  fireEvent.change(input, { target: { value: '10-12-2024' } });
  await new Promise((resolve) => setTimeout(() => resolve(true), 100));
  expect(wrapper.container.querySelector('.input-error')).toBeInTheDocument();

  expect(isBirthday('10-12-2024')).toBe(false);
  expect(isBirthday('')).toBe(false);
  expect(isBirthday('10-12-2022')).toBe(true);
});

test('Input file render', async () => {
  const wrapper = render(<Form setForm={mockSetForm} />);
  const input = wrapper.container.querySelector('.form__file');
  if (!(input instanceof HTMLInputElement)) return;

  expect(input).toBeInTheDocument();

  const image = new File(['test'], 'primer.png', { type: 'image/png' });
  const anotherFile = new File(['test'], 'primer.txt', { type: 'text/plain' });

  const trueDt = new DataTransfer();
  trueDt.files[0] = image;
  const falseDt = new DataTransfer();
  expect(isImage(falseDt.files)).toBe(false);

  falseDt.files[0] = anotherFile;

  expect(isImage(falseDt.files)).toBe(false);
  expect(isImage(trueDt.files)).toBe(true);
});

test('Input heard render', async () => {
  const wrapper = render(<Form setForm={mockSetForm} />);
  const input = wrapper.container.querySelector('.checkbox');
  if (!(input instanceof HTMLInputElement)) return;

  expect(input).toBeInTheDocument();
});

test('Input accept render', async () => {
  const wrapper = render(<Form setForm={mockSetForm} />);

  expect(wrapper.container.querySelector('.checkbox__accept')).toBeInTheDocument();
});

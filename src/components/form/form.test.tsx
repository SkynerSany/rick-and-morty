import { render } from '@testing-library/react';
import { test } from 'vitest';
import '@testing-library/jest-dom';
import Form from './form';
import { isBirthday } from './inputs/input-birthday';
import { isImage } from './inputs/input-file';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { saveForm } from './form-events';

test('Form render', () => {
  const wrapper = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  expect(wrapper.container.querySelector('.form')).toBeInTheDocument();
});

test('Input name render', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  expect(wrapper.getByText('Your name')).toBeInTheDocument();

  const input = wrapper.container.querySelector('.form__name');
  if (!input) throw new Error();
});

test('Input birthday render', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  expect(wrapper.getByText('Your birthday')).toBeInTheDocument();

  const input = wrapper.container.querySelector('.form__birthday');
  if (!input) throw new Error();

  expect(isBirthday('10-12-2029')).toBe(false);
  expect(isBirthday('')).toBe(false);
  expect(isBirthday('10-12-2022')).toBe(true);
});

test('Input file render', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
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
  const wrapper = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const input = wrapper.container.querySelector('.checkbox');
  if (!(input instanceof HTMLInputElement)) return;
  expect(input).toBeInTheDocument();
});

test('Input accept render', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  expect(wrapper.container.querySelector('.checkbox__accept')).toBeInTheDocument();
});

test('Form events', async () => {
  const fileList = new DataTransfer();
  const file = await fetch('https://rickandmortyapi.com/api/character/avatar/2.jpeg').then(
    (result) => result.blob()
  );
  fileList.files[0] = file as File;
  fileList.items.add(file as File);

  const formCardDataResult = {
    name: 'Alex Breed',
    birthday: '2023-02-22',
    country: 'Belarus',
    gender: 'Male',
    heard: 'YouTube',
    file: URL.createObjectURL(fileList.files[0]),
  };

  const formCardDatainput = {
    name: 'Alex Breed',
    birthday: '2023-02-22',
    country: 'Belarus',
    gender: false,
    heard: 'YouTube',
    file: fileList.files,
  };

  const formData = saveForm(formCardDatainput);
  expect(formData.gender).toBe(formCardDataResult.gender);
});

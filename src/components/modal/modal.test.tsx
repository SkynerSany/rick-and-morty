import { fireEvent, render } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import Modal from './modal';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { setModal } from '../../redux/reducers';
import { act } from 'react-dom/test-utils';

test('Modal component is load', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Modal />
    </Provider>
  );

  act(() => {
    store.dispatch(setModal(<p>Hello</p>));
  });

  await new Promise((resolve) => setTimeout(() => resolve(true), 100));
  expect(wrapper.getByText('Hello')).toBeInTheDocument();
});

test('Modal component is closed om overlay', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Modal />
    </Provider>
  );
  await fireEvent.click(wrapper.container.querySelector('.modal')!);
  expect(wrapper.container.querySelector('.modal')).toBeInTheDocument();
});

test('Modal component is closed om button', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Modal />
    </Provider>
  );
  await fireEvent.click(wrapper.container.querySelector('.modal__close')!);
  expect(wrapper.container.querySelector('.modal')).toBeInTheDocument();
});

test('Modal component is not closed', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Modal />
    </Provider>
  );

  act(() => {
    store.dispatch(setModal(<p>Hello</p>));
  });

  await new Promise((resolve) => setTimeout(() => resolve(true), 100));
  await fireEvent.click(wrapper.getByText('Hello'));
  expect(wrapper.container.querySelector('.modal')).toBeInTheDocument();
});

import { fireEvent, render } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import Modal from './modal';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { setModal } from '../../redux/reducers';
import { act } from 'react-dom/test-utils';

const cardData = {
  id: 1,
  name: 'Alex',
  status: 'Live',
  species: 'Toxic',
  type: 'Animal',
  gender: 'Man',
  origin: {
    name: 'Alex Prif',
    url: 'https://asd.ru',
  },
  location: {
    name: 'Russia',
    url: 'https://asd.ru',
  },
  image: 'https://asd.ru',
  episode: ['https://asd.ru', 'https://asd.ru'],
  url: 'https://asd.ru',
  created: '12.04.2023',
};

test('Modal component is load', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Modal />
    </Provider>
  );

  act(() => {
    store.dispatch(
      setModal({
        type: 'fullCard',
        data: cardData,
      })
    );
  });

  await new Promise((resolve) => setTimeout(() => resolve(true), 100));
  expect(wrapper.getByText('Man')).toBeInTheDocument();
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
    store.dispatch(
      setModal({
        type: 'fullCard',
        data: cardData,
      })
    );
  });

  await new Promise((resolve) => setTimeout(() => resolve(true), 100));
  await fireEvent.click(wrapper.getByText('Man'));
  expect(wrapper.container.querySelector('.modal')).toBeInTheDocument();
});

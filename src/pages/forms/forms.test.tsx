import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { addForm } from '../../redux/reducers';
import store from '../../redux/store';
import Forms from './forms';

const formCardData = {
  name: 'Alex Breed',
  birthday: '2023-02-22',
  country: 'Belarus',
  gender: 'Male',
  heard: 'YouTube',
  image: '',
};

test('Forms page is load', () => {
  const wrapper = render(
    <Provider store={store}>
      <Forms />
    </Provider>
  );
  expect(wrapper.container.querySelector('h2')?.textContent).toBe('Forms');
});

test('All card-forms load', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Forms />
    </Provider>
  );

  act(() => {
    store.dispatch(addForm(formCardData));
  });
  await new Promise((resolve) => setTimeout(() => resolve(true), 100));
  expect(wrapper.container.querySelector('.forms__card-wrapper')?.children.length).toBe(1);
});

import { render } from '@testing-library/react';
import Forms from './forms';

const formCardData = {
  name: 'Alex Breed',
  birthday: '2023-02-22',
  country: 'Belarus',
  gender: 'Male',
  heard: ['YouTube', 'Yandex'],
  image: '',
};

test('Forms page is load', () => {
  const wrapper = render(<Forms setMessage={() => {}} />);
  expect(wrapper.container.querySelector('h2')?.textContent).toBe('Forms');
});

test('All card-forms load', async () => {
  localStorage.forms = JSON.stringify([formCardData]);
  const wrapper = render(<Forms setMessage={() => {}} />);
  expect(wrapper.container.querySelector('.forms__card-wrapper')?.children.length).toBe(1);
});

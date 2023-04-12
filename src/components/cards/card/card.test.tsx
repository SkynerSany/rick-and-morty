import { describe, test, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './card';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

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

describe('<Card />', () => {
  test('Card mounts properly', () => {
    const wrapper = render(
      <Provider store={store}>
        <Card cardData={cardData} />
      </Provider>
    );
    expect(wrapper).toBeTruthy();

    const title = wrapper.container.querySelector('.card__title');
    expect(title?.textContent).toBe(cardData.name);

    const desc = wrapper.container.querySelector('.card__desc');
    expect(desc?.textContent).toBe(cardData.species);
  });

  test('Open full', async () => {
    const wrapper = render(
      <Provider store={store}>
        <Card cardData={cardData} />
      </Provider>
    );

    const card = wrapper.container.querySelector('.card');
    await fireEvent.click(card!);
    expect(wrapper.container.querySelector('.full-card')).toBe(null);
  });
});

import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FullCard from './full-card';

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

describe('<FullCard />', () => {
  test('FullCard mounts properly', async () => {
    const wrapper = render(<FullCard cardData={cardData} />);
    expect(wrapper.container).toBeInTheDocument();
  });

  test('All data is load', async () => {
    const wrapper = render(<FullCard cardData={cardData} />);

    expect(wrapper.container.querySelector('.full-card__base-info')?.firstChild?.textContent).toBe(
      'Name: Alex'
    );
  });
});

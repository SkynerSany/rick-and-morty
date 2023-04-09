import { describe, test, expect, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import Cards from './cards';

const cardsData = {
  info: {
    count: 10,
    pages: 1,
    next: null,
    prev: null,
  },
  results: [
    {
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
      episode: ['https://asd.ru'],
      url: 'https://asd.ru',
      created: '12.04.2023',
    },
  ],
};

let allPages = 1;
const setAllPages = (pages: number) => {
  allPages = pages;
};

let currentPage = 1;
const setCurrentPage = (page: number) => {
  currentPage = page;
};

const mockFetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(cardsData),
  })
);

describe('<Cards />', () => {
  test('Cards mounts properly', async () => {
    Object.defineProperty(global, 'fetch', {
      value: mockFetch,
    });

    const wrapper = render(
      <Cards
        search=""
        setAllPages={setAllPages as React.Dispatch<React.SetStateAction<number>>}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage as React.Dispatch<React.SetStateAction<number>>}
      />
    );
    expect(wrapper).toBeTruthy();

    await act(async () => {
      await new Promise((resolve) => setTimeout(() => resolve(true), 100));
    });

    expect(allPages).toBe(1);
    expect(wrapper.getAllByText('Alex').length).toBe(1);
  });
});

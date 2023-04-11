import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Cards from './cards';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { setCards } from '../../redux/reducers';

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

describe('<Cards />', () => {
  test('Cards mounts properly', async () => {
    store.dispatch(setCards(cardsData.results));

    const wrapper = render(
      <Provider store={store}>
        <Cards
          setAllPages={setAllPages as React.Dispatch<React.SetStateAction<number>>}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage as React.Dispatch<React.SetStateAction<number>>}
        />
      </Provider>
    );
    expect(wrapper.container).toBeInTheDocument();
    expect(allPages).toBe(1);
  });
});

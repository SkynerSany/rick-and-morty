import { test, expect, vi } from 'vitest';
import { getCharacters, getRequest } from './api';
import { IMessage } from '../message/message-interfaces';

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

const mockFetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(cardsData),
  })
);

test('Api is work', async () => {
  Object.defineProperty(global, 'fetch', {
    value: mockFetch,
  });

  const message = (message: IMessage) => {
    console.log(message);
  };

  const getCharacer = await getCharacters.all(1, message).then((result) => result);
  expect(getCharacer).toBe(cardsData);

  const request = await getRequest('asd', message);
  expect(request).toBe(cardsData);
});

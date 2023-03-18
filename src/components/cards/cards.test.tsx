import { describe, test, expect, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import Cards from './cards';

const cardsData = [
  {
    title: 'This is some title',
    photo: 'https://picsum.photos/id/1011/800/450',
    text: 'Curabitur convallis ac quam vitae laoreet',
  },
  {
    title: 'This is some title',
    photo: 'https://picsum.photos/id/1011/800/450',
    text: 'Curabitur convallis ac quam vitae laoreet',
  },
];

const mockFetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(cardsData),
  })
);

Object.defineProperty(global, 'fetch', {
  value: mockFetch,
});

describe('<Cards />', () => {
  test('Cards mounts properly', async () => {
    const wrapper = render(<Cards />);
    expect(wrapper).toBeTruthy();

    await act(async () => {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 100)
      );
    });

    expect(wrapper.getAllByText('This is some title').length).toBe(cardsData.length);
  });
});

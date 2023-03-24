import { describe, test, expect, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import Cards from './cards';
import { IMessage } from '../message/message-interfaces';

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

const mockSetError = vi.fn((message: IMessage) => {
  const state: { errors: IMessage[] } = {
    errors: [],
  };
  state.errors.push(message);
});

const mockFetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(cardsData),
  })
);

const mockRejectFetch = vi.fn(() =>
  Promise.reject(() => {
    message: 'test error';
  })
);

describe('<Cards />', () => {
  test('Cards mounts properly', async () => {
    Object.defineProperty(global, 'fetch', {
      value: mockFetch,
    });

    const wrapper = render(<Cards setError={mockSetError} />);
    expect(wrapper).toBeTruthy();

    await act(async () => {
      await new Promise((resolve) => setTimeout(() => resolve(true), 100));
    });

    expect(wrapper.getAllByText('This is some title').length).toBe(cardsData.length);
  });

  test('Cards not load', async () => {
    Object.defineProperty(global, 'fetch', {
      value: mockRejectFetch,
    });

    const wrapper = render(<Cards setError={mockSetError} />);
    expect(wrapper).toBeTruthy();

    await act(async () => {
      await new Promise((resolve) => setTimeout(() => resolve(true), 100));
    });

    expect(wrapper.container.querySelector('card')).toBe(null);
  });
});

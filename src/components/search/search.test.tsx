import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './search';

const localStorageMock = (() => {
  const store: { [key: string]: string } = {};
  return {
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    getItem: vi.fn((key: string) => {
      return store[key] || null;
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

const setSearch = () => {};

describe('<Search />', () => {
  test('Search mounts properly', async () => {
    const wrapper = render(<Search setSearch={setSearch} />);
    expect(wrapper.container).toBeInTheDocument();
  });

  test('Input save in localStorage', async () => {
    render(<Search setSearch={setSearch} />);

    await fireEvent.change(screen.getByRole('textbox'), { target: { value: '123' } });
    await fireEvent.click(screen.getByRole('button'));
    expect(localStorage.getItem('search')).toBe('123');
  });
});

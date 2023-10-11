import { describe, test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './search';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('<Search />', () => {
  test('Search mounts properly', async () => {
    const wrapper = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    expect(wrapper.container).toBeInTheDocument();
  });

  test('Input save in localStorage', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    await fireEvent.change(screen.getByRole('textbox'), { target: { value: '123' } });
    await fireEvent.click(screen.getByRole('button'));
    expect(store.getState().store.search).toBe('123');
  });
});

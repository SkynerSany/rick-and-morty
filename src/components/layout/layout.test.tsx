import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import Layout from './layout';
import store from '../../redux/store';
import { Provider } from 'react-redux';

test('Layout component is load', () => {
  const wrapper = render(
    <MemoryRouter>
      <Provider store={store}>
        <Layout />
      </Provider>
    </MemoryRouter>
  );

  expect(wrapper.container.querySelector('footer')).toBeInTheDocument();
  expect(wrapper.container.querySelector('header')).toBeInTheDocument();
});

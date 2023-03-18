import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Layout from './layout';

test('Layout component is load', () => {
  const wrapper = render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  expect(wrapper.container.querySelector('footer')).toBeInTheDocument();
  expect(wrapper.container.querySelector('header')).toBeInTheDocument();
});

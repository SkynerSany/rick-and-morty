import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Menu from './menu';

test('Menu component is load', () => {
  const wrapper = render(
    <MemoryRouter>
      <Menu />
    </MemoryRouter>
  );

  const routes = wrapper.container.querySelectorAll('.menu__link');

  expect(routes[0].textContent).toBe('Home');
  expect(routes[1].textContent).toBe('Forms');
  expect(routes[2].textContent).toBe('About Us');
});

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './menu';

test('Menu component is load', () => {
  const wrapper = render(
    <MemoryRouter>
      <Menu />
    </MemoryRouter>
  );

  expect(wrapper.container.querySelectorAll('.menu__link')[0].textContent).toBe('Home');
  expect(wrapper.container.querySelectorAll('.menu__link')[1].textContent).toBe('About Us');
});

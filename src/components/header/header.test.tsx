import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Header from './header';
import { MemoryRouter } from 'react-router-dom';

describe('<Header />', () => {
  test('Header mounts properly', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    const logo = wrapper.container.querySelector('.header__logo');
    expect(logo?.textContent).toBe('RS React');
  });
});

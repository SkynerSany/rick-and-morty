import { render } from '@testing-library/react';
import Forms from './forms';

test('About page is load', () => {
  const wrapper = render(<Forms />);
  expect(wrapper.container.querySelector('h2')?.textContent).toBe('Forms');
});

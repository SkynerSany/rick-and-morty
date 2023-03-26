import { render } from '@testing-library/react';
import Main from './main-page';

test('Main page is load', () => {
  const wrapper = render(<Main />);
  expect(wrapper.container.querySelector('h2')?.textContent).toBe('Main');
});

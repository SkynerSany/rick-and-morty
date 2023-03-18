import { render } from '@testing-library/react';
import ErrorPage from './error-page';

test('Error page is load', () => {
  const wrapper = render(<ErrorPage />);
  expect(wrapper).toBeTruthy();
});

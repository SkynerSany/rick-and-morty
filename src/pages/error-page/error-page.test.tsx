import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import ErrorPage from './error-page';

test('Error page is load', () => {
  const wrapper = render(<ErrorPage />);
  expect(wrapper).toBeTruthy();
});

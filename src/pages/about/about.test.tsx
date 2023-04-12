import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import About from './about';

test('About page is load', () => {
  const wrapper = render(<About />);
  expect(wrapper.container.querySelector('h2')?.textContent).toBe('About Us');
});

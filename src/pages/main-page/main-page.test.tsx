import { render } from '@testing-library/react';
import Main from './main-page';

const mockSetError = vi.fn((message: string) => {
  const state: { errors: string[] } = {
    errors: [],
  };
  state.errors.push(message);
});

test('Main page is load', () => {
  const wrapper = render(<Main setError={mockSetError} />);
  expect(wrapper.container.querySelector('h2')?.textContent).toBe('Main');
});

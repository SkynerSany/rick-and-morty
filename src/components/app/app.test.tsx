import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './app';
import { MemoryRouter } from 'react-router-dom';

test('full app rendering/navigating', async () => {
  const wrapper = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const user = userEvent.setup();

  expect(wrapper.container).toBeInTheDocument();

  await user.click(screen.getByText(/About Us/i));
  expect(wrapper.container.querySelector('h2')?.textContent).toBe('About Us');
  await user.click(screen.getByText(/Home/i));
  expect(wrapper.container.querySelector('h2')?.textContent).toBe('Main');
});

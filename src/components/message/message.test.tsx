import { render } from '@testing-library/react';
import Message from './message';

test('Message component is load', () => {
  const wrapper = render(<Message message={{ type: 'error', text: 'test' }} />);

  expect(wrapper.container.querySelector('.message__text')?.textContent).toBe('test');
});

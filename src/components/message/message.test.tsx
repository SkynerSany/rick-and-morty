import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Message from './message';

test('Message component is load', () => {
  const wrapper = render(
    <Provider store={store}>
      <Message message={{ type: 'error', text: 'test' }} />
    </Provider>
  );

  expect(wrapper.container.querySelector('.message__text')?.textContent).toBe('test');
});

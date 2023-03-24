import { render } from '@testing-library/react';
import { IMessage } from '../../components/message/message-interfaces';
import Main from './main-page';

const mockSetError = (message: IMessage) => {
  const state: { errors: IMessage[] } = {
    errors: [],
  };
  state.errors.push(message);
};

test('Main page is load', () => {
  const wrapper = render(<Main setError={mockSetError} />);
  expect(wrapper.container.querySelector('h2')?.textContent).toBe('Main');
});

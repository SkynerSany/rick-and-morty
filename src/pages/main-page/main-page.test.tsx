import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Main from './main-page';

test('Main page is load', () => {
  const wrapper = render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  expect(wrapper.container.querySelector('h2')?.textContent).toBe('Main');
});

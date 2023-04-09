import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './modal';

test('Modal component is load', () => {
  const wrapper = render(<Modal modalContent={<p>Hello</p>} />);
  expect(wrapper.getByText('Hello')).toBeInTheDocument();
});

test('Modal component is closed om overlay', async () => {
  const wrapper = render(<Modal modalContent={<p>Hello</p>} />);
  await fireEvent.click(wrapper.container.querySelector('.modal')!);
  expect(wrapper.container.querySelector('.modal')).toBeInTheDocument();
});

test('Modal component is closed om button', async () => {
  const wrapper = render(<Modal modalContent={<p>Hello</p>} />);
  await fireEvent.click(wrapper.container.querySelector('.modal__close')!);
  expect(wrapper.container.querySelector('.modal')).toBeInTheDocument();
});

test('Modal component is not closed', async () => {
  const wrapper = render(<Modal modalContent={<p>Hello</p>} />);
  await fireEvent.click(wrapper.getByText('Hello'));
  expect(wrapper.container.querySelector('.modal')).toBeInTheDocument();
});

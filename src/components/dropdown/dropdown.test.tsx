import { render, screen } from '@testing-library/react';
import Dropdown from './dropdown';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';

const dropdownList = ['first', 'second'];

test('Dropdown render', () => {
  render(<Dropdown dropdownList={dropdownList} dropdownRef={React.createRef()} />);
  expect(screen.getByText(dropdownList[0])).toBeInTheDocument();
});

test('Dropdown set current', async () => {
  const wrapper = render(<Dropdown dropdownList={dropdownList} dropdownRef={React.createRef()} />);
  const user = userEvent.setup();

  await user.click(wrapper.container);
  await user.click(screen.getByText(dropdownList[1]));
  expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe(dropdownList[1]);
});

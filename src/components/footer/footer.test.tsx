import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './footer';

describe('<Footer />', () => {
  test('Footer mounts properly', () => {
    const wrapper = render(<Footer />);
    expect(wrapper.getByText('RS School')).toBeInTheDocument();
    expect(wrapper.getByText('My Github')).toBeInTheDocument();
  });
});

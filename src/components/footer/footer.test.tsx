import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Footer from './footer';

describe('<Footer />', () => {
  test('Footer mounts properly', () => {
    const wrapper = render(<Footer />);
    expect(wrapper).toBeTruthy();
  });
});

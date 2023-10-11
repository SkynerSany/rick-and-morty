import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import { AllCardsLoaderLarge, AllCardsLoaderMedium, AllCardsLoaderSmall } from './cards-loader';

test('AllCardsLoader component is load', () => {
  const smallWrapper = render(<AllCardsLoaderSmall />);
  const mediumWrapper = render(<AllCardsLoaderMedium />);
  const largeWrapper = render(<AllCardsLoaderLarge />);

  expect(smallWrapper.container).toBeInTheDocument();
  expect(mediumWrapper.container).toBeInTheDocument();
  expect(largeWrapper.container).toBeInTheDocument();
});

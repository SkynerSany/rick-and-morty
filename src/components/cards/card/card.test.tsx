import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Card from './card';

const cardData = {
  title: 'This is some title',
  photo: 'https://picsum.photos/id/1011/800/450',
  text: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.',
};

describe('<Card />', () => {
  test('Card mounts properly', () => {
    const wrapper = render(<Card cardData={cardData} />);
    expect(wrapper).toBeTruthy();

    const title = wrapper.container.querySelector('.card__title');
    expect(title?.textContent).toBe(cardData.title);

    const desc = wrapper.container.querySelector('.card__desc');
    expect(desc?.textContent).toBe(cardData.text);
  });
});

import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { IFormSubmitProps } from '../form/form-interfaces';
import '@testing-library/jest-dom';
import FormCard from './form-card';

const formCardData: IFormSubmitProps = {
  name: 'Alex',
  birthday: '2022-12-04',
  country: 'Belarus',
  gender: 'Male',
  heard: 'YouTube',
  file: 'https://image.jpg',
};

test('Forms-card render', () => {
  const wrapper = render(<FormCard formData={formCardData} formNumber={1} />);

  expect(wrapper.getByText(`Name: ${formCardData.name}`)).toBeInTheDocument();
  expect(wrapper.getByText(`Birthday: ${formCardData.birthday}`)).toBeInTheDocument();
  expect(wrapper.getByText(`Country: ${formCardData.country}`)).toBeInTheDocument();
  expect(wrapper.getByText(`Gender: ${formCardData.gender}`)).toBeInTheDocument();
  expect(wrapper.getByText(`Heard from: ${formCardData.heard}`)).toBeInTheDocument();
  expect(wrapper.container.querySelector('h3')?.textContent).toBe('2');
});

import { RefObject } from 'react';

export const validateInput = {
  name: (input: RefObject<HTMLInputElement>): boolean => {
    if (!(input.current instanceof HTMLInputElement)) return false;
    const text = input.current.value.trim();
    const [firstName, lastName] = text.split(' ');

    if (text.split(' ').length < 2) return false;
    if (firstName[0].toLowerCase() === firstName[0]) return false;
    if (lastName[0].toLowerCase() === lastName[0]) return false;
    if (lastName[0].toLowerCase() === lastName[0]) return false;
    return true;
  },

  birthday: (input: RefObject<HTMLInputElement>): boolean => {
    if (!(input.current instanceof HTMLInputElement)) return false;
    const date = input.current.value;

    if (input.current.value === '') return false;
    if (new Date() < new Date(date)) return false;
    if (!new Date(date)) return false;
    return true;
  },

  country: (input: RefObject<HTMLInputElement>): boolean => {
    if (!(input.current instanceof HTMLInputElement)) return false;
    if (input.current.value === '') return false;
    return true;
  },

  heard: (inputs: RefObject<HTMLInputElement>[]): boolean => {
    if (!inputs.find((input) => input.current instanceof HTMLInputElement && input.current.checked))
      return false;
    return true;
  },

  accept: (input: RefObject<HTMLInputElement>): boolean => {
    if (!(input.current instanceof HTMLInputElement)) return false;
    if (!input.current.checked) return false;
    return true;
  },

  file: (input: RefObject<HTMLInputElement>) => {
    if (!(input.current instanceof HTMLInputElement)) return false;
    if (input.current.value === '') return false;
    if (input.current.files?.length === 0) return false;
    if (!input.current.files![0].type.includes('image')) return false;
    return true;
  },
};

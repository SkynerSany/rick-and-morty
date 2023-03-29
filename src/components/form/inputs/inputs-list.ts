import { createRef, RefObject } from 'react';

export interface IInputHeard {
  [key: string]: RefObject<HTMLInputElement>;
  youtube: RefObject<HTMLInputElement>;
  yandex: RefObject<HTMLInputElement>;
  google: RefObject<HTMLInputElement>;
}

export interface IInputList {
  form: RefObject<HTMLFormElement>;
  name: RefObject<HTMLInputElement>;
  birthday: RefObject<HTMLInputElement>;
  gender: RefObject<HTMLInputElement>;
  country: RefObject<HTMLInputElement>;
  image: RefObject<HTMLInputElement>;
  accept: RefObject<HTMLInputElement>;
  heard: IInputHeard;
}

export const inputList: IInputList = {
  form: createRef<HTMLFormElement>(),
  name: createRef<HTMLInputElement>(),
  birthday: createRef<HTMLInputElement>(),
  gender: createRef<HTMLInputElement>(),
  country: createRef<HTMLInputElement>(),
  image: createRef<HTMLInputElement>(),
  accept: createRef<HTMLInputElement>(),
  heard: {
    youtube: createRef<HTMLInputElement>(),
    yandex: createRef<HTMLInputElement>(),
    google: createRef<HTMLInputElement>(),
  },
};

export const DEFAULT_VALID_LIST = {
  name: true,
  birthday: true,
  country: true,
  heard: true,
  image: true,
  accept: true,
};

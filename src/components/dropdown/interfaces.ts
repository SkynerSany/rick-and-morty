import { RefObject } from 'react';

export interface IDropdownState {
  list: boolean;
  currentItem: string;
}

export interface IDropdownProps {
  dropdownList: string[];
  dropdownRef: RefObject<HTMLInputElement>;
}

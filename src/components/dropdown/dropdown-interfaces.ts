import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

export interface IDropdownState {
  list: boolean;
  currentItem: string;
}

export interface IDropdownProps {
  dropdownList: string[];
  register: UseFormRegister<FieldValues>;
  valid: (value: string) => boolean;
}

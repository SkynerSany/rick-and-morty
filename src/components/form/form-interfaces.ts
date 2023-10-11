import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

export interface IForm {
  name: string;
  birthday: string;
  country: string;
  gender: boolean;
  heard: string;
  file: FileList;
}

export interface IFormProps {
  setForm: () => void;
}

export interface IFormSubmitProps {
  [key: string]: string;
}

export interface IInputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

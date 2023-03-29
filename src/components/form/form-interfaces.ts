import { IInputList } from './inputs/inputs-list';

export interface IForm {
  name: string;
  birthday: string;
  country: string;
  gender: string;
  heard: string[];
  image: string;
}

export interface IFormProps {
  setForm: () => void;
}

export interface IFormState {
  name: boolean;
  birthday: boolean;
  country: boolean;
  heard: boolean;
  image: boolean;
  accept: boolean;
}

export interface IFormSubmitProps {
  event: React.FormEvent;
  inputList: IInputList;
  setForm: () => void;
  inputValid: IFormState;
  setInputValid: TUseStateInput;
}

export type TUseStateInput = React.Dispatch<React.SetStateAction<IFormState>>;

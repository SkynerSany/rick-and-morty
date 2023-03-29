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

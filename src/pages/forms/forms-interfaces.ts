import { TSetMessage } from '../../components/app/app-interfaces';
import { IForm } from '../../components/form/form-interfaces';

export interface IFormsProps {
  setMessage: TSetMessage;
}

export interface IFormsState {
  forms: IForm[];
}

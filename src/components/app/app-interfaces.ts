import { IMessage } from '../message/message-interfaces';

export type TSetMessage = (message: IMessage) => void;

export interface IAppState {
  errors: IMessage[];
}

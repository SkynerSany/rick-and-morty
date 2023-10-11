export interface IMessage {
  type: 'error' | 'info';
  text: string;
}

export type IMessageFunction = (message: IMessage) => void;

export interface IMessageProps {
  message: IMessage;
}

export interface IMessage {
  type: 'error' | 'info';
  text: string;
}

export interface IMessageProps {
  message: IMessage;
}

import { IMessageProps } from './message-interfaces';
import './message.scss';

export default function Message({ message }: IMessageProps) {
  return (
    <div className={`message ${message.type} center-loc`}>
      <p className="message__text">{message.text}</p>
    </div>
  );
}

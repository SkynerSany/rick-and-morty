import { IMessageProps } from './message-interfaces';
import './message.scss';

export default function Message({ message }: IMessageProps): JSX.Element {
  return (
    <div className={`message ${message.type} center-loc`}>
      <p className="message__text">{message.text}</p>
    </div>
  );
}

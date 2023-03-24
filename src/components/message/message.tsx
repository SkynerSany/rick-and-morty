import { IMessage } from './message-interfaces';
import './message.scss';

export default function Message({ message }: { message: IMessage }) {
  return (
    <div className={`message ${message.type} center-loc`}>
      <p className="message__text">{message.text}</p>
    </div>
  );
}

import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { removeMessage } from '../../redux/reducers';
import { IMessageProps } from './message-interfaces';
import './message.scss';

export default function Message({ message }: IMessageProps): JSX.Element {
  const dispatch = useDispatch();

  useMemo(() => {
    setTimeout(() => dispatch(removeMessage()), 3000);
  }, [message.text]);

  return (
    <div className={`message ${message.type} center-loc`}>
      <p className="message__text">{message.text}</p>
    </div>
  );
}

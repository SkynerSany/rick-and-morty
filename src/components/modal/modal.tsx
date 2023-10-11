import './modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeModal } from '../../redux/reducers';
import { RootState } from '../../redux/store';
import FullCard from './full-card/full-card';
import { ICharacter } from '../api/api-interfaces';

export default function Modal(): JSX.Element {
  const dispatch = useDispatch();
  const modalContent = useSelector((state: RootState) => state.store.modal);

  const modalData = {
    fullCard: <FullCard cardData={modalContent.data as ICharacter} />,
  };

  function closeModal(target: EventTarget): void {
    if (
      target instanceof HTMLElement &&
      target.className !== 'modal' &&
      target.className !== 'modal__close'
    )
      return;

    dispatch(removeModal());
  }

  return (
    <article className="modal" onClick={(e) => closeModal(e.target)}>
      <button className="modal__close">X</button>
      {modalContent.type ? modalData[modalContent.type] : ''}
    </article>
  );
}

import { useContext } from 'react';
import { IModalProps } from './modal-interfaces';
import './modal.scss';
import { ModalContext } from '../layout/layout';

export default function Modal({ modalContent }: IModalProps) {
  const setModal = useContext(ModalContext);
  function closeModal(target: EventTarget) {
    if (
      target instanceof HTMLElement &&
      target.className !== 'modal' &&
      target.className !== 'modal__close'
    )
      return;
    setModal(null);
  }

  return (
    <article className="modal" onClick={(e) => closeModal(e.target)}>
      <button className="modal__close">X</button>
      {modalContent}
    </article>
  );
}

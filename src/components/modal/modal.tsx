import './modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeModal } from '../../redux/reducers';
import { RootState } from '../../redux/store';

export default function Modal() {
  const dispatch = useDispatch();
  const modalContent = useSelector((state: RootState) => state.modal);

  function closeModal(target: EventTarget) {
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
      {modalContent}
    </article>
  );
}

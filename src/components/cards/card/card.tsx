import './card.scss';
import { ICardProps } from './card-interfaces';
import FullCard from '../full-card/full-card';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../redux/reducers';

export default function Card({ cardData }: ICardProps): JSX.Element {
  const dispatch = useDispatch();

  function setFullCard() {
    dispatch(setModal(<FullCard cardData={cardData} />));
  }

  return (
    <article className="card" onClick={() => setFullCard()}>
      <div className="card-wrapper">
        <figure className="loading">
          <img src={cardData.image} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card__title">{cardData.name}</h2>
          <p className="card__desc">{cardData.species}</p>
          <p className="card__desc">{cardData.gender}</p>
        </div>
      </div>
    </article>
  );
}

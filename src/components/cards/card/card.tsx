import './card.scss';
import { ICardProps } from './card-interfaces';

export default function Card({ cardData }: ICardProps): JSX.Element {
  return (
    <article className="card">
      <div className="card-wrapper">
        <figure>
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

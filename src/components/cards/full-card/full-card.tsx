import { v1 } from 'uuid';
import { ICardProps } from '../card/card-interfaces';
import './full-card.scss';
import { useEffect, useState } from 'react';
import { IEpisodeData } from './full-card-interfaces';

export default function FullCard({ cardData }: ICardProps): JSX.Element {
  const [episodes, setEpisodes] = useState<PromiseFulfilledResult<IEpisodeData>[]>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const episodesData: Promise<IEpisodeData>[] = cardData.episode.map((episode) =>
      fetch(episode).then((result) => result.json())
    );
    Promise.allSettled(episodesData).then((episodeValues) => {
      setEpisodes(
        episodeValues.filter(
          (episode) => episode.status === 'fulfilled'
        ) as PromiseFulfilledResult<IEpisodeData>[]
      );

      setLoader(false);
    });
  }, []);

  return (
    <div className="full-card">
      <div className="full-card__row">
        <figure className="loading">
          <img src={cardData.image} alt={cardData.name} className="full-card__image" />
        </figure>
        <ul className="full-card__base-info">
          <li>
            <span>Name: </span>
            {cardData.name}
          </li>
          <li>
            <span>Species: </span>
            {cardData.species}
          </li>
          <li>
            <span>Gender: </span>
            {cardData.gender}
          </li>
          <li>
            <span>Status: </span>
            {cardData.status}
          </li>
          <li>
            <span>Location: </span>
            {cardData.location.name}
          </li>
        </ul>
      </div>
      <p className="full-card__episodes-title">Episodes:</p>
      <ul className="full-card__episodes">
        {episodes.map(
          (episode, i) =>
            loader || (
              <li key={v1()}>
                {i + 1}.<span>{episode.value.episode}</span>
                <span>{episode.value.name}</span>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

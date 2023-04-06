import { useContext, useEffect, useState } from 'react';
import { v1 } from 'uuid';
import { AppContext } from '../layout/layout';
import Card from './card/card';
import './cards.scss';
import { getCharacters } from '../api/api';
import { ICharacter } from '../api/api-interfaces';
import { ICardsProps } from './cards-interfaces';

export default function Cards({ search }: ICardsProps): JSX.Element {
  const message = useContext(AppContext);
  const [cards, setCards] = useState<ICharacter[]>([]);

  useEffect(() => {
    getCharacters.bySearch(search || '', message).then((characters) => {
      if (characters) setCards(characters.results);
    });
  }, [search, message]);

  return (
    <div className="cards">
      {cards.length > 0 ? cards.map((cardData) => <Card cardData={cardData} key={v1()} />) : ''}
    </div>
  );
}

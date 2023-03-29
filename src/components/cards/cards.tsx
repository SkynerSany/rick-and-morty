import { useContext, useEffect, useState } from 'react';
import { v1 } from 'uuid';
import { AppContext } from '../layout/layout';
import { ICardData } from './card-interfaces';
import Card from './card/card';
import './cards.scss';

export default function Cards(): JSX.Element {
  const message = useContext(AppContext);
  const [cards, setCards] = useState<ICardData[]>([]);

  useEffect(() => {
    fetch('../../data/cardsData.json')
      .then((response) => response.json())
      .then((result) => setCards(result))
      .catch((error: Error) => {
        message({
          type: 'error',
          text: error.message,
        });
      });
  }, [message]);

  return (
    <div className="cards">
      {cards.length > 0 ? cards.map((cardData) => <Card cardData={cardData} key={v1()} />) : ''}
    </div>
  );
}

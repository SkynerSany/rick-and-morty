import { useContext, useEffect, useState } from 'react';
import { v1 } from 'uuid';
import { AppContext } from '../layout/layout';
import Card from './card/card';
import './cards.scss';
import { getCharacters } from '../api/api';
import { ICharacter } from '../api/api-interfaces';
import { ICardsProps } from './cards-interfaces';

export default function Cards({
  search,
  setAllPages,
  currentPage,
  setCurrentPage,
}: ICardsProps): JSX.Element {
  const message = useContext(AppContext);
  const [cards, setCards] = useState<ICharacter[]>([]);

  useEffect(() => {
    getCharacters.bySearch(search || '', currentPage, message).then((characters) => {
      if (characters) {
        setCards(characters.results);
        setAllPages(characters.info.pages);
        return;
      }

      setCards([]);
    });
  }, [search, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <>
      {cards.length > 0 ? (
        <div className="cards">
          {cards.map((cardData) => (
            <Card cardData={cardData} key={v1()} />
          ))}
        </div>
      ) : (
        <p className="cards__not-found">Characters with this name is not found!</p>
      )}
    </>
  );
}

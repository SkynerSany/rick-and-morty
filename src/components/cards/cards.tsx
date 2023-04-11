import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v1 } from 'uuid';
import '@testing-library/jest-dom';
import Card from './card/card';
import './cards.scss';
import { ICardsProps } from './cards-interfaces';
import { AllCardsLoader } from '../../templates/cards-loader';
import { RootState } from '../../redux/store';
import { setCards, setMessage } from '../../redux/reducers';
import { api } from '../api/api';

export default function Cards({
  setAllPages,
  currentPage,
  setCurrentPage,
}: ICardsProps): JSX.Element {
  const search = useSelector((state: RootState) => state.store.search);
  const cards = useSelector((state: RootState) => state.store.cards);
  const dispatch = useDispatch();
  const { data, error, isFetching } = api.useGetCharactersQuery({ search, currentPage });

  useEffect(() => {
    if (!error && data && !isFetching) {
      dispatch(setCards(data.results));
      setAllPages(data.info.pages);
      return;
    }

    if (error) {
      dispatch(
        setMessage({
          type: 'error',
          text: 'Characters is not found!',
        })
      );
      dispatch(setCards([]));
      setAllPages(1);
    }
  }, [data, error, isFetching]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <>
      {isFetching && <AllCardsLoader />}
      {cards.length > 0 ? (
        <div className="cards">
          {cards.map((cardData) => isFetching || <Card cardData={cardData} key={v1()} />)}
        </div>
      ) : (
        <p className="cards__not-found">Characters with this name is not found!</p>
      )}
    </>
  );
}

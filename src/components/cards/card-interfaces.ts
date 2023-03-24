import { TSetMessage } from '../app/app-interfaces';

export interface ICardData {
  title: string;
  photo: string;
  text: string;
}

export interface ICardsProps {
  setError: TSetMessage;
}

export interface ICardsState {
  cards: ICardData[];
}

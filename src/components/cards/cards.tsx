import React from 'react';
import { v1 as uuidv1 } from 'uuid';
import { TSetMessage } from '../app/app-interfaces';
import { ICardsProps, ICardsState } from './card-interfaces';
import Card from './card/card';
import './cards.scss';

export default class Cards extends React.Component<ICardsProps, ICardsState> {
  constructor(props: { setError: TSetMessage }) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount(): void {
    fetch('../../data/cardsData.json')
      .then((response) => response.json())
      .then((result) => {
        this.setState({ cards: result });
      })
      .catch((error: Error) => {
        this.props.setError({
          type: 'error',
          text: error.message,
        });
      });
  }

  render(): JSX.Element {
    return (
      <div className="cards">
        {this.state.cards.length > 0
          ? this.state.cards.map((cardData) => <Card cardData={cardData} key={uuidv1()} />)
          : ''}
      </div>
    );
  }
}

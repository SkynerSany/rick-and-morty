import React, { ReactPropTypes } from 'react';
import { ICardData } from '../../interfaces';
import Card from './card/card';
import './cards.scss';

export default class Cards extends React.Component {
  state: {
    cards: ICardData[];
  };

  constructor(props: ReactPropTypes) {
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
      });
  }

  render(): JSX.Element {
    return (
      <div className="cards">
        {this.state.cards.length > 0
          ? this.state.cards.map((cardData, i) => <Card cardData={cardData} key={i} />)
          : ''}
      </div>
    );
  }
}

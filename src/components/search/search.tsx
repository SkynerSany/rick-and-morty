import React, { ReactPropTypes } from 'react';
import './search.scss';

export default class Search extends React.Component {
  state: {
    searchText: string;
  };

  constructor(props: ReactPropTypes) {
    super(props);
    this.state = {
      searchText: localStorage.search || '',
    };
  }

  componentDidUpdate(): void {
    localStorage.setItem('search', this.state.searchText);
  }

  render(): JSX.Element {
    return (
      <div className="search">
        <input
          onChange={(event) => this.setState({ searchText: event.target.value })}
          value={this.state.searchText}
          type="text"
          placeholder="Write something"
          className="search__input"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </div>
    );
  }
}

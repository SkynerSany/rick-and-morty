import React, { ReactPropTypes } from 'react';
import './search.scss';

export default class Search extends React.Component {
  state: {
    searchText: string;
  };

  constructor(props: ReactPropTypes) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  changeSearch(text: string): void {
    this.setState({ searchText: text });
  }

  saveSearch(): void {
    localStorage.search = this.state.searchText;
  }

  UNSAFE_componentWillMount(): void {
    this.setState({ searchText: localStorage.search || '' });
  }

  // added this to support page refresh
  componentDidUpdate(): void {
    this.saveSearch();
  }

  componentWillUnmount(): void {
    this.saveSearch();
  }

  render(): JSX.Element {
    return (
      <div className="search">
        <input
          onChange={(event) => this.changeSearch(event.target.value)}
          value={this.state.searchText}
          type="text"
          placeholder="Write something"
          className="search__input"
        />
        <button type="submit" className="search__button" tabIndex={-1}>
          Search
        </button>
      </div>
    );
  }
}

import { useEffect, useRef } from 'react';
import './search.scss';
import { ISearchProps } from './search-interfaces';

export default function Search({ setSearch }: ISearchProps): JSX.Element {
  const inputSearch = useRef<HTMLInputElement | null>(null);

  function saveSearch() {
    const text = inputSearch!.current!.value;
    localStorage.setItem('search', text || '');
    setSearch(text);
  }

  function checkEnter(key: string) {
    if (key !== 'Enter') return;
    saveSearch();
  }

  useEffect(() => {
    inputSearch!.current!.value = localStorage.getItem('search') || '';
  }, []);

  return (
    <div className="search">
      <input
        ref={inputSearch}
        onKeyUp={(e) => checkEnter(e.key)}
        type="text"
        placeholder="Write something"
        className="search__input"
      />
      <button onClick={() => saveSearch()} type="submit" className="search__button">
        Search
      </button>
    </div>
  );
}

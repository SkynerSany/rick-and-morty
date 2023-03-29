import { useMemo, useState } from 'react';
import './search.scss';

export default function Search(): JSX.Element {
  const [searchText, setSearchText] = useState<string>(localStorage.search || '');

  useMemo(() => {
    localStorage.setItem('search', searchText);
  }, [searchText]);

  return (
    <div className="search">
      <input
        onChange={(event) => setSearchText(event.target.value)}
        value={searchText}
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

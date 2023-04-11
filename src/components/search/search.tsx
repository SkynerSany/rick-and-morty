import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './search.scss';
import { RootState } from '../../redux/store';
import { setSearch } from '../../redux/reducers';

export default function Search(): JSX.Element {
  const inputSearch = useRef<HTMLInputElement | null>(null);
  const search = useSelector((state: RootState) => state.store.search);
  const dispatch = useDispatch();

  function saveSearch() {
    const text = inputSearch!.current!.value;
    dispatch(setSearch(text));
  }

  function checkEnter(key: string) {
    if (key !== 'Enter') return;
    saveSearch();
  }

  useEffect(() => {
    inputSearch!.current!.value = search;
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

import { useState } from 'react';
import Cards from '../../components/cards/cards';
import Search from '../../components/search/search';
import './main-page.scss';
import Pagination from '../../components/pagination/pagination';

export default function Main(): JSX.Element {
  document.title = 'RS React';
  // const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const [allPages, setAllPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="main">
      <div className="wrapper">
        <h2 className="page-title">Main</h2>
        <Search />
        <Cards
          setAllPages={setAllPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {allPages > 1 ? (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            allPages={allPages}
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
}

import { useState } from 'react';
import Cards from '../../components/cards/cards';
import Search from '../../components/search/search';
import './main-page.scss';

export default function Main(): JSX.Element {
  document.title = 'RS React';
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  return (
    <section className="main">
      <div className="wrapper">
        <h2 className="page-title">Main</h2>
        <Search setSearch={setSearch} />
        <Cards search={search} />
      </div>
    </section>
  );
}

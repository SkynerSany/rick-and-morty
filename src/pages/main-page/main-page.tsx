import { TSetMessage } from '../../components/app/app-interfaces';
import Cards from '../../components/cards/cards';
import Search from '../../components/search/search';
import './main-page.scss';

export default function Main({ setError }: { setError: TSetMessage }): JSX.Element {
  document.title = 'RS React';

  return (
    <section className="main">
      <div className="wrapper">
        <h2 className="page-title">Main</h2>
        <Search />
        <Cards setError={setError} />
      </div>
    </section>
  );
}

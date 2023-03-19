import Cards from '../../components/cards/cards';
import Search from '../../components/search/search';
import './main-page.scss';

export default function Main({ setError }: { setError: (message: string) => void }): JSX.Element {
  document.title = 'RS React';

  return (
    <section className="main">
      <div className="wrapper">
        <Search />
        <h2 className="page-title">Main</h2>
        <Cards setError={setError} />
      </div>
    </section>
  );
}

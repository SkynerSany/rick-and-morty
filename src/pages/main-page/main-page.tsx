import Cards from '../../components/cards/cards';
import './main-page.scss';

export default function Main(): JSX.Element {
  return (
    <section className="main">
      <div className="wrapper">
        <h2 className="page-title">Main</h2>
        <Cards />
      </div>
    </section>
  );
}

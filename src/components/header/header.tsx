import { Link } from 'react-router-dom';
import Menu from '../menu/menu';
import Search from '../search/search';
import './header.scss';

export default function Header() {
  return (
    <header className="header center-loc">
      <div className="wrapper">
        <Link to="/" className="header__logo">
          RS React
        </Link>
        <Search />
        <Menu />
      </div>
    </header>
  );
}

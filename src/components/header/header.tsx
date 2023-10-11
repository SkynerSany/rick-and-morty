import { Link } from 'react-router-dom';
import Menu from '../menu/menu';
import './header.scss';

export default function Header(): JSX.Element {
  return (
    <header className="header center-loc">
      <div className="wrapper">
        <Link to="/" className="header__logo">
          RS React
        </Link>
        <Menu />
      </div>
    </header>
  );
}

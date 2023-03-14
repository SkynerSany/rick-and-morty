import Menu from '../menu/menu';
import './header.scss';

export default function Header() {
  return (
    <header className='header center-loc'>
      <div className="wrapper">
        <h1 className="header__logo">RS React</h1>
        <Menu/>
      </div>
    </header>
  )
};

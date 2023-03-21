import { NavLink } from 'react-router-dom';
import './menu.scss';

export default function Menu(): JSX.Element {
  return (
    <div className="menu">
      <NavLink to="/" className="menu__link">
        Home
      </NavLink>
      <NavLink to="/forms" className="menu__link">
        Forms
      </NavLink>
      <NavLink to="/about" className="menu__link">
        About Us
      </NavLink>
    </div>
  );
}

import { Link } from 'react-router-dom';
import './menu.scss';

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/" className="menu__link">Home</Link>
      <Link to="/about" className="menu__link">About Us</Link>
    </div>
  );
};

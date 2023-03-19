import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import './layout.scss';

export default function Layout({ errors }: { errors: JSX.Element[] }) {
  return (
    <>
      <Header />
      <Outlet />
      <div className="errors-wrapper">{errors.length > 0 ? errors : ''}</div>
      <Footer />
    </>
  );
}

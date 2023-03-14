import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import './layout.scss';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

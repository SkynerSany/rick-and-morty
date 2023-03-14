import { Route, Routes } from 'react-router-dom';
import './app.scss';
import Header from './components/header/header';
import About from './pages/about/about';
import ErrorPage from "./pages/error-page/error-page";
import Main from './pages/main-page/main-page';

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
};

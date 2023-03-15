import { Route, Routes } from 'react-router-dom';
import './app.scss';
import Layout from './components/layout/layout';
import About from './pages/about/about';
import ErrorPage from './pages/error-page/error-page';
import Main from './pages/main-page/main-page';

export default function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

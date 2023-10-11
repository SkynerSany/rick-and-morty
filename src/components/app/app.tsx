import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './app.scss';
import Layout from '../layout/layout';
import About from '../../pages/about/about';
import ErrorPage from '../../pages/error-page/error-page';
import Main from '../../pages/main-page/main-page';
import Forms from '../../pages/forms/forms';
import store from '../../redux/store';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="forms" element={<Forms />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

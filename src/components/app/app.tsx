import { Route, Routes } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';
import './app.scss';
import Layout from '../layout/layout';
import About from '../../pages/about/about';
import ErrorPage from '../../pages/error-page/error-page';
import Main from '../../pages/main-page/main-page';
import React, { ReactPropTypes } from 'react';
import ErrorMessage from '../error-message/error-message';
import Forms from '../../pages/forms/forms';

export default class App extends React.Component {
  state: {
    errors: string[];
  };

  constructor(props: ReactPropTypes) {
    super(props);
    this.state = {
      errors: [],
    };
    this.setError = this.setError.bind(this);
  }

  removeError(message: string): void {
    this.setState({ errors: this.state.errors.filter((errorMessage) => errorMessage !== message) });
  }

  setError(message: string): void {
    this.setState({ errors: [...this.state.errors, message] });
  }

  createError(): JSX.Element[] {
    return this.state.errors.map((errorMessage) => {
      setTimeout(() => this.removeError(errorMessage), 3000);
      return <ErrorMessage errorText={errorMessage} key={uuidv1()} />;
    });
  }

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout errors={this.createError()} />}>
            <Route index element={<Main setError={this.setError} />} />
            <Route path="forms" element={<Forms />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

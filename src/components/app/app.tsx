import { Route, Routes } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';
import './app.scss';
import Layout, { AppContext } from '../layout/layout';
import About from '../../pages/about/about';
import ErrorPage from '../../pages/error-page/error-page';
import Main from '../../pages/main-page/main-page';
import React from 'react';
import Message from '../message/message';
import Forms from '../../pages/forms/forms';
import { IMessage } from '../message/message-interfaces';
import { IAppState } from './app-interfaces';

export default class App extends React.Component<Record<string, never>, IAppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      errors: [],
    };
    this.setMessage = this.setMessage.bind(this);
  }

  removeError(index: number): void {
    this.setState({ errors: this.state.errors.filter((_, i) => index !== i) });
  }

  setMessage(message: IMessage): void {
    this.setState({ errors: [...this.state.errors, message] });
  }

  createMessage(): JSX.Element[] {
    return this.state.errors.map((message, i) => {
      setTimeout(() => this.removeError(i), 3000);
      return <Message message={message} key={uuidv1()} />;
    });
  }

  render() {
    return (
      <AppContext.Provider value={this.setMessage}>
        <Routes>
          <Route path="/" element={<Layout errors={this.createMessage()} />}>
            <Route index element={<Main />} />
            <Route path="forms" element={<Forms />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    );
  }
}

import { Route, Routes } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';
import './app.scss';
import Layout, { AppContext } from '../layout/layout';
import About from '../../pages/about/about';
import ErrorPage from '../../pages/error-page/error-page';
import Main from '../../pages/main-page/main-page';
import { useState } from 'react';
import Message from '../message/message';
import Forms from '../../pages/forms/forms';
import { IMessage } from '../message/message-interfaces';

export default function App(): JSX.Element {
  const [messages, setMessages] = useState<IMessage[]>([]);

  function removeMessage(index: number): void {
    setMessages(messages.filter((_, i) => index !== i));
  }

  function setMessage(message: IMessage): void {
    setMessages([...messages, message]);
  }

  function createMessage(): JSX.Element[] {
    return messages.map((message, i) => {
      setTimeout(() => removeMessage(i), 3000);
      return <Message message={message} key={uuidv1()} />;
    });
  }

  return (
    <AppContext.Provider value={setMessage}>
      <Routes>
        <Route path="/" element={<Layout errors={createMessage()} />}>
          <Route index element={<Main />} />
          <Route path="forms" element={<Forms />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

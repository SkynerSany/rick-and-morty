import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { IMessage } from '../message/message-interfaces';
import ILayoutProps from './layout-interfaces';
import './layout.scss';

export const AppContext = React.createContext((message: IMessage) => {
  message;
});

export default function Layout({ errors }: ILayoutProps) {
  return (
    <>
      <Header />
      <Outlet />
      <div className="errors-wrapper">{errors.length > 0 ? errors : ''}</div>
      <Footer />
    </>
  );
}

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { IMessage } from '../message/message-interfaces';
import ILayoutProps from './layout-interfaces';
import './layout.scss';
import Modal from '../modal/modal';

export const AppContext = React.createContext((message: IMessage) => {
  message;
});

export const ModalContext = React.createContext((children: JSX.Element | null) => {
  children;
});

export default function Layout({ errors, modal }: ILayoutProps) {
  return (
    <>
      <Header />
      <Outlet />
      <div className="errors-wrapper">{errors.length > 0 ? errors : ''}</div>
      {modal ? <Modal modalContent={modal} /> : ''}
      <Footer />
    </>
  );
}

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import './layout.scss';
import Modal from '../modal/modal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { v1 } from 'uuid';
import Message from '../message/message';

export default function Layout() {
  const messages = useSelector((state: RootState) => state.messages);
  const modal = useSelector((state: RootState) => state.modal);

  return (
    <>
      <Header />
      <Outlet />
      <div className="errors-wrapper">
        {messages.length > 0
          ? messages.map((message) => <Message message={message} key={v1()} />)
          : ''}
      </div>
      {modal ? <Modal /> : ''}
      <Footer />
    </>
  );
}

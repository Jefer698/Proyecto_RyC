
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import LoginForm from '../containers/LoginForm';
import HeaderBg from '../components/HeaderBg';
import { navLinkUser } from '../data/NavLinks';

export default function Login() {
  return (
    <>
      <div className='lg'>
        <HeaderBg />
        <h1 className='cuenta'>CUENTA</h1>
      </div>
      <NavBar links={navLinkUser} />
      <Content title='Login'>
        <LoginForm />
      </Content>
      <Footer />
    </>
  );
}




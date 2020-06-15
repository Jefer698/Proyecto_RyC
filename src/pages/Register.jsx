
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
import Content from '../components/Content';
import RegisterForm from '../containers/RegisterForm';
import HeaderBg from '../components/HeaderBg';
import { navLinkUser } from '../data/NavLinks';


export default function Register() {

  return (
    <>
      <div className='lg'>
        <HeaderBg />
        <h1 className='cuenta'>REGISTRARSE</h1>
      </div>
      <NavBar links={navLinkUser} />
      <Content title='REGISTRO' >
        <RegisterForm />
      </Content>
    </>
  );
}


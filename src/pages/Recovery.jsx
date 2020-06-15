
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
import Content from '../components/Content';
import RecoveryForm from '../containers/RecoveryForm';
import HeaderBg from '../components/HeaderBg';
import { navLinkUser } from '../data/NavLinks';

export default function Recovery() {

  return (
    <>
      <div className='lg'>
        <HeaderBg />
        <h1 className='cuenta'>RECUPERAR CONTRASEÑA</h1>
      </div>
      <NavBar links={navLinkUser} />
      <Content title='Recuperar Contraseña'>
        <RecoveryForm />
      </Content>
    </>
  );
}




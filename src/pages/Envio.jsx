
import React from 'react';
import NavBar from '../components/NavBar';
import EnvioForm from '../containers/Envio/EnvioForm';
import { navLinkUser } from '../data/NavLinks';


export default function AboutUs() {

  return (
    <>
      <div className='aboutg'>
        <h1 className='about'>ENVIO</h1>
      </div>
      <NavBar links={navLinkUser} />
      <EnvioForm />
    </>

  );
}

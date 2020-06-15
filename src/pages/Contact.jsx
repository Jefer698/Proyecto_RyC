
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
import ContactForm from '../containers/ContactForm';
import { navLinkUser } from '../data/NavLinks';

export default function Work() {

  return (
    <>
      <div className='contacto'>
        <h1 className='contactot'>CONTACTO</h1>
      </div>
      <NavBar links={navLinkUser} />
      <ContactForm />
    </>
  );
}

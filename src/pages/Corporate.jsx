
import React from 'react';
import NavBar from '../components/NavBar';
// import CorporateForm from '../containers/CorporateForm';
import { navLinkUser } from '../data/NavLinks';


export default function Corporate() {
  return (

    <>
      <div className='corp'>
        <h1 className='corpt'>CORPORATIVO</h1>
      </div>
      <NavBar links={navLinkUser} />
    </>
  );
}

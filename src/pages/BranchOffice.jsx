
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
import { navLinkUser } from '../data/NavLinks';

export default function BranchOffice() {

  return (
    <>
      <div className='local'>
        <h1 className='localt'>SUCURSALES</h1>
      </div>
      <NavBar links={navLinkUser} />
    </>
  );
}


import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
import CustomizedSelects from '../containers/SelectionMenu/SelectionMenuForm';
// import HeaderBg from '../components/HeaderBg';
import { navLinkUser } from '../data/NavLinks';


export default function AssembleMenu() {

  return (
    <>
      <div className='armar'>
        <h1 className='armart'>SELECCIONAR MENÚ</h1>
      </div>
      <NavBar links={navLinkUser} />
      <CustomizedSelects />
    </>
  );
}


import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
// import BranchOfficeForm from '../containers/BranchOfficeForm';
import ActionsInExpansionPanelSummary from '../containers/AssembleMenu/AssembleMenuForm';
import { navLinkUser } from '../data/NavLinks';

export default function BranchOffice() {

  return (
    <>
      <div className='local'>
        <h1 className='localt'>ARMAR MENU</h1>
      </div>
      <div className='armarbg'>
        <NavBar links={navLinkUser} />
        <ActionsInExpansionPanelSummary />
      </div>
    </>
  );
}

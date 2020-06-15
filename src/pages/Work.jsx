
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
// import ComplexGrid from '../containers/WorkForm';
import ActionsInExpansionPanelSummary from '../components/Checklist/Checklist';
import { navLinkUser } from '../data/NavLinks';


export default function Work() {
  return (
    <>
      <div className='work'>
        <h1 className='workt'>ESCRIBENOS</h1>
      </div>
      <div className='armarbg'>
        <NavBar links={navLinkUser} />
        <ActionsInExpansionPanelSummary />;
      </div>
    </>
  );
}

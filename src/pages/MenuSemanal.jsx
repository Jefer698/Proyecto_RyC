
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
import VerticalTabs from '../containers/MenuSemanal/MenuSemanalForm';
import HeaderBg from '../components/HeaderBg';
import { navLinkUser } from '../data/NavLinks';
import { dataMenu } from '../data/dataMenu';


const Work = () => {
  return (
    <>
      <div className='lg'>
        <HeaderBg />
        <h1 className='cuenta'>CUENTA</h1>
      </div>
      <NavBar links={navLinkUser} />
      <VerticalTabs dataMenu={dataMenu}/>
    </>
  );
}

export default Work;
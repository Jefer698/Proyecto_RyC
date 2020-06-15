import React from 'react';
import TableMainteiner from '../containers/TableMaintainer'
import { initialItemMenu, dataPriceUnique } from '../data/initialData'
import { dataMenu } from '../data/dataMenu'
import NavBar from '../components/NavBar';
import HeaderBg from '../components/HeaderBg';
import { navLinkAdmin } from '../data/NavLinks';


const MenuMaintainer = () => {

  return (
    <>
      <div className='lg'>
        <HeaderBg />
        <h1 className='cuenta'>Mantenedor Menú</h1>
      </div>
      <NavBar links={navLinkAdmin} />
      <TableMainteiner
        dataMenu={dataMenu}
        initialItemMenu={initialItemMenu}
        dataPriceUnique={dataPriceUnique}
      />
    </>
  );
}

export default MenuMaintainer;

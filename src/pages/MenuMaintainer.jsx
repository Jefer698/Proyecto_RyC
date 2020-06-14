import React from 'react';
import TableMainteiner from '../containers/TableMaintainer'
import {dataMenu, initialItemMenu, dataPriceUnique} from '../data/MenuMaintainer'

const MenuMaintainer = () => {

  return (
    <>
      <TableMainteiner
        dataMenu={dataMenu}
        initialItemMenu={initialItemMenu}
        dataPriceUnique={dataPriceUnique}
      />
    </>
  );
}

export default MenuMaintainer;
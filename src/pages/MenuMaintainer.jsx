import React from 'react';
import TableMainteiner from '../containers/TableMaintainer'
import { initialItemMenu, dataPriceUnique } from '../data/initialData'
import { dataMenu } from '../data/dataMenu'

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
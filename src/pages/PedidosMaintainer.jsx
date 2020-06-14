import React from 'react';
import PedidosUsers from '../containers/PedidosUsers'
import { dataCurrently, dataEnded } from '../data/PedidosMaintainer'


const PedidosMaintainer = () => {

  return (
    <>
      <PedidosUsers
        dataCurrently={dataCurrently}
        dataEnded={dataEnded}
      />
    </>
  );
}

export default PedidosMaintainer;
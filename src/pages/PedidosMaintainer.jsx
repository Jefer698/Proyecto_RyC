import React from 'react';
import PedidosUsers from '../containers/PedidosUsers'


const dataCurrently = [
  {
    menu: 'MENÚ 1 Pollo al Horno',
    name: 'Pedor Juan',
    rut: '22222222-2',
    phone: '9999999',
    mail: 'etst@test.com',
    address: 'Tes direecction',
    paymentType: 'Efectivo'
  }
];

const dataEnded = [
  {
    username: 'Pedro',
    menu: 'MENÚ 1 Pollo al Horno'
  }
];

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
import React from 'react';
import PedidosUsers from '../containers/PedidosUsers'
import { dataCurrently, dataEnded } from '../data/PedidosMaintainer'
import NavBar from '../components/NavBar';
import HeaderBg from '../components/HeaderBg';
import { navLinkAdmin } from '../data/NavLinks';


const PedidosMaintainer = () => {

  return (
    <>
      <div className='lg'>
        <HeaderBg />
        <h1 className='cuenta'>Mantenedor Pedidos</h1>
      </div>
      <NavBar links={navLinkAdmin} />
      <PedidosUsers
        dataCurrently={dataCurrently}
        dataEnded={dataEnded}
      />
    </>
  );
}

export default PedidosMaintainer;
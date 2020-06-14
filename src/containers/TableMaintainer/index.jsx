import React from 'react';
import ItemBox from '../../components/ItemBox';
import Button from '@material-ui/core/Button';
import useStyle from './styles';


const TableMenu = () => {
  const classes = useStyle();
  const actions = [
    {
      name: 'EDITAR',
      color: '#19B200'
    },
    {
      name: 'ELIMINAR',
      color: '#FF0000'
    },
    // {
    //   name: 'DETALLE DE PEDIDO',
    //   color: '#9CB6D9'
    // },
    // {
    //   name: 'SIGUENTE PAGINA',
    //   color: '#F26D6D'
    // }
  ]
  const action_price = [
    {
      name: 'EDITAR',
      color: '#19B200'
    }
  ]

  return (
    <>
      <div className={classes.containerEnd}>
        <Button variant="contained" color="secondary" className={classes.buttonAdd}>AGREGAR</Button>
      </div>
      <div className={classes.containerBox}>
        <ItemBox title="3000" text="PRECIO MENÚ" actions={action_price}></ItemBox>
      </div>
      <div className={classes.containerBox}>
        <ItemBox title="MENÚ 1  Pollo al Horno" actions={actions}></ItemBox>
        <ItemBox title="MENÚ 1  Pollo al Horno" actions={actions}></ItemBox>
        <ItemBox title="MENÚ 1  Pollo al Horno" actions={actions}></ItemBox>
        <ItemBox title="MENÚ 1  Pollo al Horno" actions={actions}></ItemBox>
      </div>
      <div className={classes.containerEnd}> <Button style={{ color:'#F26D6D' }}>SIGUIENTE PAGINA</Button></div>
    </>
  )
}

export default TableMenu;
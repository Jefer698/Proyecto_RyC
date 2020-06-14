import React from 'react';
import ItemBox from '../../components/ItemBox';
import Button from '@material-ui/core/Button';
import useStyle from './styles';
import EditPriceModal from './Modals/EditPrice';


const TableMenu = () => {
  const [openEditPrice, setOpenEditPrice] = React.useState(false);
  const [dataPrice, setDataPrice] = React.useState(0);
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

  const dataPriceUnique = {
    price: '3000'
  }
  const action_price = [
    {
      name: 'EDITAR',
      color: '#19B200',
      onClick: (data) => onClickEditPrice(data)
    }
  ]
  
  const onClickEditPrice = (value) => {
    setDataPrice(value)
    setOpenEditPrice(!openEditPrice)
  }
  const handleCloseEditPrice = (value) => {
    setOpenEditPrice(false)
  }
  const onChangePrice = (event) => {
    const value = event.target.value;
    setDataPrice(value);
  }

  return (
    <>
      <div className={classes.containerEnd}>
        <Button variant="contained" color="secondary" className={classes.buttonAdd}>AGREGAR</Button>
      </div>
      <div className={classes.containerBox}>
        <ItemBox
          title="3000"
          text="PRECIO MENÚ"
          data={dataPriceUnique.price}
          actions={action_price}
        />
      </div>
      <div className={classes.containerBox}>
        <ItemBox title="MENÚ 1  Pollo al Horno" actions={actions}></ItemBox>
        <ItemBox title="MENÚ 1  Pollo al Horno" actions={actions}></ItemBox>
        <ItemBox title="MENÚ 1  Pollo al Horno" actions={actions}></ItemBox>
        <ItemBox title="MENÚ 1  Pollo al Horno" actions={actions}></ItemBox>
      </div>
      <div className={classes.containerEnd}> <Button style={{ color: '#F26D6D' }}>SIGUIENTE PAGINA</Button></div>
      <EditPriceModal
        classes={{
          paper: classes.paper,
        }}
        id="edit-price"
        keepMounted
        open={openEditPrice}
        onChangeInput={(event) => onChangePrice(event)}
        onClose={handleCloseEditPrice}
        data={dataPrice}
      />
    </>
  )
}

export default TableMenu;
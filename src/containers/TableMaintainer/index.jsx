import React from 'react';
import ItemBox from '../../components/ItemBox';
import Button from '@material-ui/core/Button';
import useStyle from './styles';
import EditPriceModal from './Modals/EditPrice';
import EditMenuModal from './Modals/EditMenu';


const TableMenu = (props) => {
  const { dataMenu, initialItemMenu, dataPriceUnique } = props;
  const [openEditPrice, setOpenEditPrice] = React.useState(false);
  const [dataPrice, setDataPrice] = React.useState(0);
  const [menuItem, setMenuItem] = React.useState(initialItemMenu);
  const [openMenu, setOpenMenu] = React.useState(false);
  const classes = useStyle();

  const actions = [
    {
      name: 'EDITAR',
      color: '#19B200',
      onClick: (data) => onClickEditMenu(data)
    },
    {
      name: 'ELIMINAR',
      color: '#FF0000'
    }
  ]

  const actionPrice = [
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

  const onClickEditMenu = (value) => {
    setMenuItem(value)
    setOpenMenu(!openMenu)
  }

  const handleCloseEditMenu = (value) => {
    setOpenMenu(false)
  }
  const onChangeMenuInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMenuItem({...menuItem, [name]: value})
  }

  const onClickEditMenuNew = () => {
    setMenuItem(initialItemMenu)
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <div className={classes.containerEnd}>
        <Button
          variant='contained'
          color='secondary'
          onClick={onClickEditMenuNew}
          className={classes.buttonAdd}
        >AGREGAR</Button>
      </div>
      <div className={classes.containerBox}>
        <ItemBox
          title={dataPriceUnique.price}
          text='PRECIO MENÚ'
          data={dataPriceUnique.price}
          actions={actionPrice}
        />
      </div>
      <div className={classes.containerBox}>
        {
          dataMenu && dataMenu.map((item, index) => (
            <ItemBox
              key={index}
              title={item.menu}
              data={item}
              actions={actions}
            />
          ))
        }
      </div>
      {/* <div className={classes.containerEnd}> <Button style={{ color: '#F26D6D' }}>SIGUIENTE PAGINA</Button></div> */}
      <EditPriceModal
        classes={{
          paper: classes.paper,
        }}
        id='edit-price'
        keepMounted
        open={openEditPrice}
        onChangeInput={(event) => onChangePrice(event)}
        onClose={handleCloseEditPrice}
        data={dataPrice}
      />
      <EditMenuModal
        classes={{
          paper: classes.paper,
        }}
        id='edit-menu'
        keepMounted
        open={openMenu}
        onChangeInput={(event) => onChangeMenuInput(event)}
        onClose={handleCloseEditMenu}
        data={menuItem}
      />
    </>
  )
}

export default TableMenu;
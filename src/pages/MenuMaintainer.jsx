import React from 'react';
import TableMainteiner from '../containers/TableMaintainer'
import { initialItemMenu, dataPriceUnique } from '../data/initialData'
import { dataMenu } from '../data/dataMenu'
import NavBar from '../components/NavBar';
import { navLinkAdmin } from '../data/NavLinks';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      marginTop:80,
      width:"auto",
      boxShadow:"none",
      height:"auto",
      fontSize:70,
      color:"white",
     backgroundColor:"transparent",
 
    },
  }));

const MenuMaintainer = () => {
  const classes = useStyles();
  return (
    <>
      <div className='lg'>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>MANTENEDOR DE MENÚ</Paper>
        </Grid>
        </Grid>
    </div>
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

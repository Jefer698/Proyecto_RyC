
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
// import ComplexGrid from '../containers/WorkForm';
import ActionsInExpansionPanelSummary from '../components/Checklist/Checklist';
import { navLinkUser } from '../data/NavLinks';
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


export default function Work() {
  const classes = useStyles();
  return (
    <>
      <div className='work'>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>ESCRIBENOS</Paper>
        </Grid>
        </Grid>
    </div>
      </div>
      <div className='armarbg'>
        <NavBar links={navLinkUser} />
        <ActionsInExpansionPanelSummary />;
      </div>
    </>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,

  
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className="tab">
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        
        <Tab label="Menu 1" {...a11yProps(0)} />
        <Tab label="Menu 2" {...a11yProps(1)} />
        <Tab label="Menu 3" {...a11yProps(2)} />
        <Tab label="Menu 4" {...a11yProps(3)} />
        <Tab label="Menu 5" {...a11yProps(4)} />
        <Tab label="Menu 6" {...a11yProps(5)} />
        <Tab label="Menu 7" {...a11yProps(6)} />
      </Tabs>
      <div className="tab1">
      <TabPanel  value={value} index={0}>
       Menu 1 
        <h2>DETALLE</h2>
        <h3>Imagen</h3>  
      </TabPanel>
      <TabPanel  value={value} index={1}>
     <h1 className="menu2">MENU 2</h1>
 
        <Grid  container spacing={3}>
        <Grid  item xs={6}>
          <Paper  className={classes.paper}><p>Elaborado con una presa de carne de vacuno,</p><p>de pollo, de pavo, de ganso o de gallida de</p><p>campo,mas verduras variadas:zapallo,choclo,papa.</p></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper  className={classes.paper}> <img className="m2" src="images/especias.jpg"/></Paper>
        </Grid>
    
        <Grid item xs={3}>
          <Paper  className={classes.paper}> <h1>Precio</h1><h1>$5000</h1></Paper>
        </Grid>
        
        </Grid>
     
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h1>Menu 3</h1> 
        <h2>DETALLE</h2>
        <h3>Imagen</h3>  
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h1>Menu 6</h1> 
        <h2>DETALLE</h2>
        <h3>Imagen</h3>  
      </TabPanel>
      <TabPanel value={value} index={4}>
      <h1>Menu 6</h1> 
        <h2>DETALLE</h2>
        <h3>Imagen</h3>  
      </TabPanel>
      <TabPanel value={value} index={5}>
      <h1>Menu 6</h1> 
        <h2>DETALLE</h2>
        <h3>Imagen</h3>  
      </TabPanel>
      <TabPanel value={value} index={6}>
      <h1>Menu 7</h1> 
        <h2>DETALLE</h2>
        <h3>Imagen</h3>  
      </TabPanel>
      </div>
    </div>
    </div>
  );
}




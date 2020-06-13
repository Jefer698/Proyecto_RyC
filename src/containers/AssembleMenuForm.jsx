import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

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
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    height:500,
    width:750,
  },
  margin: {
    margin: theme.spacing(1),
  },
  image: {
    width: 250,
    height: 300,

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAge(event.target.value);
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

      </Tabs>
      <div className="tab1">
      <TabPanel  value={value} index={0}>
      <Grid  container spacing={3}>
        <Grid  item xs={6}>
          <Paper  className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
              
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="images/especias.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
               <p className="titulo"> CAZUELA DE POLLO</p>
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <div className="detail"> Detalle:</div> 
                 <p className="parrafo"> Elaborado con una presa de carne de vacuno,</p>
                 <p className="parrafo"> de pollo, de pavo, de ganso o de gallina de </p>
                 <p className="parrafo"> campo, más verduras variadas: zapallo, choclo,papa.</p>
                   
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <p className="detail">Ensalada:</p>  
                 <p className="parrafo">Lechuga</p>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <p className="detail">Postre:</p>  
                 <p className="parrafo">Helado</p>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <p className="detail">Jugo o Bebida:</p>  
                 <p className="parrafo">Coca Cola</p>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox" placeholder="Ingrese cantidad">Cantidad</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
    </div>
                </Typography>
                
              
              </Grid>
              
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"><h2 className="precio">$5000</h2></Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>    
        </Grid>
      </TabPanel>
      <TabPanel  value={value} index={1}>

 
        <Grid  container spacing={3}>
        <Grid  item xs={6}>
          <Paper  className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
              
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="images/especias.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
               <p className="titulo"> TALLARINES CON POLLO</p>
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <div className="detail"> Detalle:</div> 
                 <p className="parrafo"> Elaborado con una presa de pollo,</p>
                 <p className="parrafo"> acompañado de fideos y salsa de tomate</p>
            
                   
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <p className="detail">Ensalada:</p>  
                 <p className="parrafo">Apio con limon</p>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <p className="detail">Postre:</p>  
                 <p className="parrafo">Arroz con leche</p>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <p className="detail">Jugo o Bebida:</p>  
                 <p className="parrafo">Jugo de naranja</p>
                </Typography>
                
                <Typography variant="body2" gutterBottom>
                <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Cantidad</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
    </div>
                </Typography>
              
              </Grid>
              
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"><h2 className="precio">$5000</h2></Typography>
            </Grid>
            
          </Grid>
        </Grid>
       
     
          </Paper>
        </Grid>    
        </Grid>
     
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h1>Menu 3</h1> 
        <h2>DETALLE</h2>
        <h3>Imagen</h3>  
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h1>Menu 4</h1> 
        <h2>DETALLE</h2>
        <h3>Imagen</h3>  
      </TabPanel>
      <TabPanel value={value} index={4}>
      <h1>Menu 5</h1> 
        <h2>DETALLE</h2>
        <h3>Imagen</h3>  
      </TabPanel>
      </div>
    </div>
    </div>
  );
}




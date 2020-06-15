import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { SelectionOption } from '../SelectionMenu/SelectionMenuStyle';
import Button from '@material-ui/core/Button';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
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

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = (props) => {
  const selectionop = SelectionOption();
  // const menu = menuStyles();
  const [value, setValue] = React.useState(0);
  const { dataMenu } = props
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='tab'>
        <div className={selectionop.root}>
          <Tabs
            orientation='vertical'
            variant='scrollable'
            value={value}
            onChange={handleChange}
            aria-label='Vertical tabs example'
            className={selectionop.tabs}
          >
            {
              dataMenu &&
              dataMenu.map((item, index) => (
                <Tab key={index} label={item.menu} {...a11yProps({ index })} />
              ))
            }

          </Tabs>
          <div className='tab1'>
            {
              dataMenu &&
              dataMenu.map((item, index) => (
                <TabPanel key={index} value={value} index={index}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Paper className={selectionop.paper}>
                        <Grid container spacing={2}>
                          <Grid item>
                            <ButtonBase className={selectionop.image}>
                              <img className={selectionop.img} alt='complex' src={item.image} />
                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid item xs container direction='column' spacing={2}>
                              <Grid item xs>
                                <Typography gutterBottom variant='subtitle1'>
                                  <p className='titulo'>{item.menu}</p>
                                </Typography>
                                <Typography variant='body2' gutterBottom>
                                  <div className='detail'> Detalle:</div>
                                  <p className='parrafo'>{item.details}</p>

                                </Typography>
                                <Typography variant='body2' gutterBottom>
                                  <p className='detail'>Ensalada:</p>
                                  <p className='parrafo'>{item.salad}</p>
                                </Typography>
                                <Typography variant='body2' gutterBottom>
                                  <p className='detail'>Postre:</p>
                                  <p className='parrafo'>{item.dessert}</p>
                                </Typography>
                                <Typography variant='body2' gutterBottom>
                                  <p className='detail'>Jugo o Bebida:</p>
                                  <p className='parrafo'>{item.drink}</p>
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Typography variant='subtitle1'><h2 className='precio'>$ {item.price}</h2></Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </TabPanel>
              ))
            }
          </div>

        </div>

      </div>
      <div className={selectionop.contentFood}>
        <Button
          role='link'
          href='selection'
          variant='contained'
          color='primary'
          startIcon={<PlaylistAddCheckIcon />}
        >
          Seleccionar Menú
          </Button>
        <Button
          role='link'
          href='assemble'
          variant='contained'
          color='secondary'
        >
          Armar Menú
            <PlaylistAddCheckIcon className='icon' />
        </Button>
      </div>
    </>
  );
}



export default VerticalTabs;
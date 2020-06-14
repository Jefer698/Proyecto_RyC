import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import ItemBox from '../../components/ItemBox';
import DetailModal from './Modal';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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

const a11yProps = (index) => {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const LinkTab = (props) => {
  return (
    <Tab
      component='a'
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


const PedidosUsers = (props) => {
  const {
    dataCurrently,
    dataEnded
  } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [detail, setDetail] = React.useState([]);

  const actionsCurrently = [
    {
      name: 'DETALLE DE PEDIDO',
      color: '#9CB6D9',
      onClick: (data) => onClickViewDetail(data)
    },
    {
      name: 'TERMINAR',
      color: '#FF0000',
      onClick: (data) => onClickTerminate(data)
    }
  ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClickViewDetail = (value) => {
    setDetail(value)
    setOpen(true);
  };

  const onClickTerminate = (data) => {
    alert(`Terminado ${data.menu}`)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='nav tabs'
        >
          <LinkTab className={classes.linkTab} label='ACTUALES' href='/currently' {...a11yProps(0)} />
          <LinkTab className={classes.linkTab} label='TERMINADOS' href='/terminated' {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <div className={classes.containerBox}>
          {
            dataCurrently &&
            dataCurrently.map((data, index) => (
              <ItemBox
                key={index}
                title={data.menu}
                data={data}
                actions={actionsCurrently} />
            ))
          }
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className={classes.containerBox}>
          {
            dataEnded && dataEnded.map((data, index) => (
              <ItemBox
                key={index}
                title={data.username}
                text={data.menu}
                value={data.value} />
            ))
          }
        </div>
      </TabPanel>
      <DetailModal
        classes={{
          paper: classes.paper,
        }}
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        data={detail}
      />
      <div className={classes.containerEnd}> <Button className={classes.pinkColor}>SIGUIENTE PAGINA</Button></div>
    </div>
  );
}

export default PedidosUsers;
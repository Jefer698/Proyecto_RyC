import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbarClass: {
    background: 'black',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  appBarStyle: {
    marginBottom: '30px'
  }
}));


const NavBar = (props) => {
  const { links } = props;
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((text, index) => (
          <Link key={text} to={text.href}>
            <ListItem button>
              <ListItemText primary={text.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {
        <React.Fragment key='left'>
          <AppBar position='static' className={classes.appBarStyle}>
            <Toolbar className={classes.navbarClass}>
              <IconButton
                onClick={toggleDrawer('left', true)}
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer anchor='left' open={state["left"]} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}

export default NavBar;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(() => ({
  buttonMain: {
    backgroundColor: '#f29d35',
    padding: '20px 0px',
    width: '100%',
    color: 'white',
    borderRadius: '40px',
    fontSize: '18px'
  },
  containerGrid: {
    width: '80%',
    margin: '0 auto'
  },
  containerMain: {
    width: '100%',
    paddingTop: '30px'
  }
}));

const buttonsMenu = [
  {
    href: 'menusemanal',
    name: 'MENÚ SEMANAL'
  }
]

const HomeForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerMain}>
      <h1 className='rico'>RICO Y SANO</h1>
      <Grid className={classes.containerGrid} container spacing={4}>
        {
          buttonsMenu.map((data, index) => (
            <Grid key={index} item xs={4} spacing={4}>
              <Button href={data.href} className={classes.buttonMain} variant='contained' color="secondary">
                {data.name}
              </Button>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );


}

export default HomeForm;
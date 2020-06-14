
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import useStyles from './styles';


const SimpleButton = (props) => {
  const { name, color, handleOnClick, data } = props;
  const onClick = () => {
    if (handleOnClick) handleOnClick(data)
  }
  return (
    <Button style={{ color }} onClick={onClick}>{name}</Button>
  )
}


const ItemBox = (props) => {
  const {
    title,
    text,
    actions,
    data
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.SubContainer}>
          <div>
            <h3>{title}</h3>
            <h4>{text}</h4>
          </div>
          {
            actions && <div className={classes.SubContainerButtons}>
              {
                actions.map((button, index) =>
                  <SimpleButton
                    key={index}
                    name={button.name}
                    color={button.color}
                    value={button.value}
                    data={data}
                    handleOnClick={button.onClick}
                  />)
              }
            </div>
          }
        </div>
      </Paper>
    </div>
  )
}

export default ItemBox;
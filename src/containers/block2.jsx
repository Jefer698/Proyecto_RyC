import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles({
  root: {
    width: '70%',
   
  },
});

export default function ActionsInExpansionPanelSummary() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="armarmenu">
     <h3>ENSALADA</h3>
      <ExpansionPanel className="expanel">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="Lechuga"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <div className="inputicon">
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Cantidad</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <ListAltIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      </div>
      </ExpansionPanel>
      
    
     
      </div>
    </div>
  );
}

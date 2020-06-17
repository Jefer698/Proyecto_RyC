import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AssembleStyle,menuStyles,Selectionimg } from './AssembleMenuStyle';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';

export default function ActionsInExpansionPanelSummary() {
  const assemble = AssembleStyle();
  const menu = menuStyles();
  const imgop=Selectionimg();
  return (
    <>
    <div className={assemble.root}>
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
        <img className={imgop.img} alt="complex" src="images/lechuga.jpg" />
        <div className="inputicon">
       
      </div>
      </ExpansionPanel>
      <ExpansionPanel>
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
            label="Tomate"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/tomate.jpg" />
        <div className="inputicon">
        
      </div>
      </ExpansionPanel>
      <ExpansionPanel>
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
            label="Apio"
        
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/apio.jpg" />
        <div className="inputicon">
     
      </div>
      </ExpansionPanel>
      </div>
      <div className="armarmenu">
     <h3>PLATO DE FONDO</h3>
      <ExpansionPanel>
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
            label="Cazuela"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/cazuelapollo.jpg" />
        <div className="inputicon">
     
      </div>
      </ExpansionPanel>
      <ExpansionPanel>
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
            label="Arroz con pollo"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/arrozconpollo.jpg" />
        <div className="inputicon">
    
      </div>
      </ExpansionPanel>
      <ExpansionPanel>
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
            label="Tallarines con pollo"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/tallarines.jpg" />
        <div className="inputicon">
      
      </div>
      </ExpansionPanel>
      </div>
      <div className="armarmenu">
     <h3>JUGO O BEBIDA</h3>
      <ExpansionPanel>
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
            label="Coca-Cola"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/cocacola.jpg" />
        <div className="inputicon">
      
      </div>
      </ExpansionPanel>
      <ExpansionPanel>
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
            label="Jugo de naranja"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/naranja.jpg" />
        <div className="inputicon">
      
      </div>
      </ExpansionPanel>
      <ExpansionPanel>
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
            label="Fanta"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/fanta.jpg" />
        <div className="inputicon">
        
      </div>
      </ExpansionPanel>
      </div>
      <div className="armarmenu">
     <h3>POSTRE</h3>
      <ExpansionPanel>
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
            label="Flan"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/flan.jpg" />
        <div className="inputicon">
        
      </div>
      </ExpansionPanel>
      <ExpansionPanel>
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
            label="Arroz con leche"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/arrozconleche.jpg" />
        <div className="inputicon">
      
      </div>
      </ExpansionPanel>
      <ExpansionPanel>
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
            label="Helado"
          />
        </ExpansionPanelSummary>
        <p>Detalle: CONTIENE UNA ENSALDA DE LECHUGA ACOMPAÑADA DE LOS CONDIMENTOS SAL, LIMON , ACEITE DE OLIVA</p>
        <img className={imgop.img} alt="complex" src="images/helado.jpg" />
        <div className="inputicon">
       
      </div>
      </ExpansionPanel>

      </div>
    </div>
   
    <Button
     role="link"
     href="envio"
      variant="contained"
      color="secondary"
      className={menu.button}
      startIcon={<AssignmentIcon />}
    >
      Armar Menu
    </Button>
  
  </>
  );
}

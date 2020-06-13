import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import {CheckStyle} from './Checkstyle';
import ExpansionyForm from './ExpansionyForm';
import Inputmenu from './Inputmenu';

 const ActionsInExpansionPanelSummary =() => {
    
  const assemble = CheckStyle();

  return (

  
    <div className={assemble.root}>
    <div className="armarmenu">
    <h3>ENSALADA</h3>
    <ExpansionPanel className="expanel">
   
      
       
 <ExpansionyForm label="Lechuga"/>

 <Inputmenu/>
      </ExpansionPanel>
      <ExpansionPanel>
      <ExpansionyForm label="Lechuga"/>

    <Inputmenu/>
       
      </ExpansionPanel>
      <ExpansionPanel>
      <ExpansionyForm label="Lechuga"/>

    <Inputmenu/>
      </ExpansionPanel>

      </div>
    </div>
  );
}

export default ActionsInExpansionPanelSummary ;
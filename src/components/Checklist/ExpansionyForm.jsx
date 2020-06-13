import React from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
export default function ExpansionyForm(props){
    const {label}=props;
    return(


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
  label={label}
/>
</ExpansionPanelSummary>




    );
}


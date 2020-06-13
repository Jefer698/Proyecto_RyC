import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import {CheckStyle} from './Checkstyle';
export default  function Inputmenu (props){
  const {cantidad}=props;
    const assemble = CheckStyle();

    return(


<div className="inputicon">
<FormControl className={assemble.margin}>
<InputLabel htmlFor="input-with-icon-adornment">CANTIDAD</InputLabel>
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


    );
}



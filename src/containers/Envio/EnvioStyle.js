
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';

export  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.info.light,
      color: theme.palette.common.white,
      fontSize: 24,
      textAlign:"Center"
  
    },
    body: {
      fontSize: 18,
      textAlign:"center"
      
    },
  }))(TableCell);

  export  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        
        
      },
    },
  }))(TableRow);

  export  const envioStyles = makeStyles({
    table: {
   
    width:850,
    },

  });
  
  export  const StyledTableContainer = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      
      },
      width:850,
      marginLeft:300,
      marginTop:100,

  
    },
  }))(TableContainer);

  export const inputStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(4),
  
    },
    
  }));
  export const inStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      marginRight:300
    
      }},
      button: {
        margin: theme.spacing(10),
      },
     
  }));

 
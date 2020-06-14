import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  containerBox: {
    background: 'rgba(156, 182, 217, 0.15)',
    padding: '30px',
    margin: '30px'
  },
  buttonAdd: {
    background: '#434343',
    color: 'white',
    borderRadius: '100px'
  },
  containerEnd: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  linkTab: {
    backgroundColor:'#F26D6D' 
  },
  pinkColor: {
    color: '#F26D6D'
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
}));

export default useStyles;
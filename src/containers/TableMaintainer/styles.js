import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
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
  pinkColor: {
    color: '#F26D6D'
  },
}));

export default useStyles;
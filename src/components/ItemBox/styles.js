import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  SubContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  SubContainerButtons: {
    display: 'flex'
  }
}));

export default useStyles;
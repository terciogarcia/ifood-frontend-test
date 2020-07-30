import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    overflowX: 'scroll',
    width: '100%',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
}));

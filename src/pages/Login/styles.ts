import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '5%',
  },
  logo: {
    maxWidth: '80%',
    width: 320,
    marginBottom: theme.spacing(5),
  },
}));

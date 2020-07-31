import { makeStyles } from '@material-ui/core/styles';
import background from 'assets/images/login_background.png';

export default makeStyles((theme) => ({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    backgroundImage: `url('${background}')`,
    backgroundSize: '40vh auto',
    backgroundPosition: 'left bottom',
    backgroundOrigin: 'content-box',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(6),
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

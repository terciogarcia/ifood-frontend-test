import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  image: {
    width: '100%',
    objectFit: 'contain',
  },
}));

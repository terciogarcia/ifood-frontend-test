import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  input: {
    maxWidth: 400,
    borderRadius: 24,
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontWeight: 500,
  },
  icon: {
    color: theme.palette.grey[400],
  },
}));

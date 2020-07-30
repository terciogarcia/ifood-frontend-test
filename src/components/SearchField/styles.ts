import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  input: {
    width: 400,
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

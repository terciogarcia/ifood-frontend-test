import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    backgroundColor: '#F5F3F4',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create([ 'width', 'margin' ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  filterButton: {
    marginLeft: theme.spacing(2),
  },
}));

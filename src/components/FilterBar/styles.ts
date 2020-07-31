import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    backgroundColor: theme.palette.background.default,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create([ 'width', 'margin' ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logo: {
    marginRight: theme.spacing(4),
    height: 40,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: theme.spacing(3),
      height: 60,
    },
  },
  buttonContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
      width: '100%',
    },
  },
  filterButton: {
    marginLeft: theme.spacing(2),
  },
  logoutButton: {
    color: theme.palette.grey['700'],
  },
  filterContainer: {
    width: '100%',
    overflow: 'hidden',
    height: 0,
    // transform: 'scaleY(0)',
    transition: 'all 300ms ease-in-out',
  },
  filterContainerVisible: {
    // transform: 'scaleY(1)',
    height: 'initial',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
}));

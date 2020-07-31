import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  imageLink: {
    display: 'inline-block',
    overflow: 'hidden',
    lineHeight: 0,
  },
  image: {
    width: '100%',
    objectFit: 'contain',
    transition: 'all 400ms ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      filter: 'brightness(.7)',
    },
  },
}));

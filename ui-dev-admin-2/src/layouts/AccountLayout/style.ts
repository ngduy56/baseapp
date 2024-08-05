import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles({
  authentication: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'var(--background-color)',
  },
  'login-form': {
    textAlign: 'center',
    color: 'var(--white-color)',

    '& h1': {
      fontSize: '36px',
      fontWeight: 400,
      color: 'var(--white-color)',
    },
  },
  'app-version': {
    fontSize: '12px',
    color: 'var(--white-color)',
  },
});

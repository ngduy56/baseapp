import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles({
  snackbar: {
    position: 'fixed',
    zIndex: 1001,
    backgroundColor: 'transparent',
  },
  'snackbar-item': {
    width: 300,
    opacity: '0.9',
    cursor: 'pointer',
    transition: '0.3s',

    '&:hover': {
      opacity: 1,
      boxShadow: '0 0 10px 4px rgba(0, 0, 0, 0.3)',
      backgroundColor: 'transparent',
    },

    '&>div': {
      width: '100%',
    },

    '&>div>div': {
      display: 'flex',
      alignItems: 'center',
    },
  },
});

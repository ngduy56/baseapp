import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles({
  'left-sidebar': {
    position: 'relative',
    'z-index': '999 !important',

    '&> div': {
      width: 'var(--left-sidebar-width)',
      height: '100%',
      marginTop: 'var(--header-height)',
    },
  },
});

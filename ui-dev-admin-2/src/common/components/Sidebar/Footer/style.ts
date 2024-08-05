import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles({
  'left-sidebar__footer': {
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    height: 'var(--footer-sidebar-height)',
    backgroundColor: 'var(--background-color-1)',
    position: 'absolute',
    bottom: 'var(--footer-sidebar-height)',
    left: 0,

    '& p': {
      fontSize: '13px',
    },

    '& span': {
      color: 'var(--primary-color)',
    },
  },
});

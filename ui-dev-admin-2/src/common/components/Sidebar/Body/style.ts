import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles({
  'left-sidebar__body': {
    overflowY: 'auto',
    marginBottom: 'calc(var(--footer-sidebar-height) * 2)',

    '& a': {
      textDecoration: 'none',
      color: 'var(--text-color-2)',
    },

    '& span': {
      position: 'relative',
      left: '-20px',
      fontSize: '14px',
      fontWeight: 700,
    },
  },
  active: {
    '& span': {
      color: 'var(--primary-color) !important',
    },
  },
});

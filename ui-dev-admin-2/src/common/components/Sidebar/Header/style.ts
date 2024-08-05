import { makeStyles } from '@material-ui/core';
import bgHeader from 'assets/images/sidebar-header-bg.jpg';
export const useStyles = makeStyles({
  'left-sidebar__header': {
    background: `url(${bgHeader}) no-repeat`,
    position: 'relative',
    color: 'var(--white-color)',
    display: 'flex !important',

    '& p': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },

  'user-information': {
    marginBottom: '20px',
    position: 'relative',
    left: '-25px',
  },

  logout: {
    position: 'absolute',
    bottom: 0,
    right: '6px',
    width: 'unset !important',

    '& svg': {
      color: 'var(--white-color)',
      cursor: 'pointer',
    },
  },
});

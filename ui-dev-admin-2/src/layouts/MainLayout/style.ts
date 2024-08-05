import { makeStyles } from '@material-ui/core';
const paddingLeftInput = 35;
export const useStyles = makeStyles({
  'main-container': {
    marginTop: 'var(--header-height)',
    height: 'calc(100vh - var(--header-height))',
  },

  content: {
    marginLeft: 'var(--left-sidebar-width)',
    backgroundColor: '#e9e9e9',
    padding: '30px',
    minHeight: '100%',

    '& > div': {
      backgroundColor: 'var(--white-color)',
      boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.1)',
      'min-height': 'calc(100vh - var(--header-height) - 30px * 2)',
    },
  },

  search: {
    position: 'relative',
    width: 450,
  },

  search__input: {
    width: '100%',

    '& fieldset': {
      paddingLeft: paddingLeftInput,
    },

    '& label': {
      paddingLeft: paddingLeftInput,
    },

    '& input': {
      paddingLeft: paddingLeftInput + 5,
    },
  },

  search__icon: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    color: 'var(--text-color-1)',
  },
});

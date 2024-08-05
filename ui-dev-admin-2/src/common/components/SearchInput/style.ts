import { makeStyles } from '@material-ui/core';

const paddingLeftInput = 35;

export const useStyles = makeStyles({
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

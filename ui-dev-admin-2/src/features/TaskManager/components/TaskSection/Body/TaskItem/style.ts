import { createStyles, makeStyles, Theme } from '@material-ui/core';
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'task-item': {
      padding: 10,
      cursor: 'pointer',

      '& button+button': {
        marginLeft: 10,
      },

      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },

      '&:nth-child(2n+1)': {
        backgroundColor: '#f9f9f9',
      },
    },
    btn: {
      backgroundColor: '#fff',

      '&:hover': {
        backgroundColor: '#fff',
        boxShadow:
          '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
      },
    },
    title: {
      marginLeft: 10,
    },
  })
);

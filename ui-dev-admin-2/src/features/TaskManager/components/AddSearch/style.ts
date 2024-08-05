import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'add-search-task': {
      padding: '0 10px 24px',
      display: 'flex',
    },
    btn: {
      backgroundColor: theme.palette.primary.dark,
      marginRight: '125px',
    },
  })
);

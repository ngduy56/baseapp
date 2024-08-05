import { createStyles, makeStyles, Theme } from '@material-ui/core';
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      padding: '8px 10px',
    },
    title: {
      marginBottom: 8,
    },
    description: {
      marginBottom: 12,
    },
  })
);

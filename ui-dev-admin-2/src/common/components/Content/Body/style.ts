import { createStyles, makeStyles, Theme } from '@material-ui/core';
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'content-body': {
      padding: theme.spacing(4),
      height: '100%',
      paddingBottom: theme.spacing(10),
    },
  })
);

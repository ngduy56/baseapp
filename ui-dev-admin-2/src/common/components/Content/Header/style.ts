import { createStyles, makeStyles, Theme } from '@material-ui/core';
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'content-header': {
      padding: theme.spacing(3),
      display: 'flex',
      position: 'relative',

      '& > span': {
        width: 'unset',
        position: 'absolute',
        top: '50%',
        right: theme.spacing(3),
        transform: 'translateY(-50%)',

        '& svg': {
          marginTop: theme.spacing(1),
          color: theme.palette.text.primary,
        },
      },
    },
  })
);

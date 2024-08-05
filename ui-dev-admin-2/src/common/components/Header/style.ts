import { createStyles, makeStyles, Theme } from '@material-ui/core';
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'main-header': {
      height: 'var(--header-height)',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      'flex-direction': 'row !important',
      'z-index': '1000 !important',

      '& img': {
        width: '20px',
      },
    },

    logo: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '24px !important',

      '& h1': {
        fontSize: '18px',
        color: 'var(--white-color)',
        marginLeft: theme.spacing(1),
        fontWeight: 500,
      },
    },

    'right-block': {
      width: 'unset',
      marginRight: 'unset',
      display: 'flex',
      alignItems: 'center',

      '& a': {
        display: 'block',
        marginRight: '8px',

        '& > svg': {
          width: '15px',
          fill: 'var(--white-color)',
        },
      },
    },

    'language-option': {
      margin: '0 5px',
    },

    'current-language': {
      '$img-size': '15px',
      display: 'flex',
      alignItems: 'center',

      '& img': {
        width: '$img-size',
        height: '$img-size',
        margin: '0 3px',
      },
    },

    'icon-dropdown': {
      color: 'var(--white-color)',
    },
  })
);

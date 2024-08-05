import { createStyles, makeStyles, Theme } from '@material-ui/core';
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '360px',
      padding: theme.spacing(4),
      backgroundColor: 'var(--white-color)',
      color: 'var(--text-color-1)',
      margin: '24px 0',

      '& h3': {
        margin: '8px 0',
      },

      '& svg': {
        fontSize: '18px',
      },

      '& input': {
        fontSize: '14px',
      },

      '& label': {
        fontSize: '14px',
      },
    },

    'form-control': {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: '32px',
      position: 'relative',

      '& svg': {
        marginRight: '12px',
        marginBottom: '3px',
      },

      '& p': {
        position: 'absolute',
        bottom: '-25px',
        left: 0,
      },
    },

    'form-control__input': {
      flex: 1,
      color: theme.palette.secondary.main,
    },

    'form-remember': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '23px 0 19px 0',

      '& svg': {
        fontSize: '22px',
      },

      '& span': {
        color: 'var(--text-color-1)',
        fontWeight: 600,
        fontSize: '14px',
      },

      '& input:checked ~ svg': {
        color: theme.palette.primary.light,
      },
    },

    'btn-login': {
      backgroundColor: theme.palette.primary.light,
      marginRight: '17px !important',
      cursor: 'pointer',

      '& span': {
        color: 'var(--white-color)',
        fontWeight: 400,
        lineHeight: 1.7,
      },

      '&:active': {
        backgroundColor: 'var(--white-color) !important',
        '& span': {
          color: '#999',
        },
      },

      '&:disabled': {
        '& span': {
          color: 'rgba(0, 0, 0, 0.259)',
        },
      },
    },

    'btn-login-google': {
      backgroundColor: theme.palette.secondary.main,
    },

    'form-security': {
      position: 'relative',
      margin: '14px 0',
    },
    'form-security__input': {
      width: '100%',

      '& input': {
        paddingRight: '60px',
      },
    },

    'form-security__actions': {
      position: 'absolute',
      paddingBottom: '3px',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',

      '& svg + svg': {
        marginLeft: '5px',
      },

      '& svg': {
        fontSize: '24px',
        color: 'var(--text-color-1)',
      },
    },
  })
);

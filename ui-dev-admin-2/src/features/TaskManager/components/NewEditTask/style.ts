import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  'new-edit-task': {
    width: 500,

    '& h1': {
      'text-align': 'center',
    },
  },
  'form-actions': {
    textAlign: 'center',

    '& button + button': {
      marginLeft: 30,
    },
  },
  'task-name': {
    marginTop: 20,
  },
  'form-control': {
    margin: '30px 0',
  },
  'btn-cancel': {
    backgroundColor: '#fff',
  },
});

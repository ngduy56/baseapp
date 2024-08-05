import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useStyles } from './style';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export type SnackbarAlertType = {
  isSuccess: boolean;
  successMessage: string;
  isError: boolean;
  errorMessage: string;
  handleClose?: () => void;
};

const ALERT_DURATION = 4000;

function SnackbarAlert({
  isSuccess,
  successMessage,
  isError,
  errorMessage,
  handleClose,
}: Partial<SnackbarAlertType>) {
  const classes = useStyles();

  return (
    <div className={classes.snackbar}>
      <Snackbar
        className={classes['snackbar-item']}
        open={isSuccess}
        autoHideDuration={ALERT_DURATION}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success">{successMessage}</Alert>
      </Snackbar>
      <Snackbar
        className={classes['snackbar-item']}
        open={isError}
        autoHideDuration={ALERT_DURATION}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
    </div>
  );
}

export default SnackbarAlert;

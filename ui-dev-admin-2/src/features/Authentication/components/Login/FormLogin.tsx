import {
  TextField,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  InputAdornment,
  Tooltip,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HttpsIcon from '@material-ui/icons/Https';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  getCurrentUser,
  getLoginInformation,
} from 'features/Authentication/store/thunkActions';
import { LoginRequest } from 'features/Authentication/types';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useStyles } from 'features/Authentication/components/Login/style';
import SnackbarAlert, { SnackbarAlertType } from 'common/components/SnackbarAlert';
import { getLoginAlertInformation } from 'app/selectors';
import { removeAlert } from 'features/Authentication/store/loginSlice';

const schema = yup.object().shape({
  userNameOrEmailAddress: yup.string().label('Username or email').required(),
  password: yup.string().label('Password').required().min(6).max(20),
  rememberClients: yup.boolean(),
});

function Form() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showCode, setShowCode] = useState(false);
  const snackbarAlert: Partial<SnackbarAlertType> = useAppSelector(getLoginAlertInformation);
  snackbarAlert.handleClose = () => {
    dispatch(removeAlert());
  };

  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (data: LoginRequest) => {
    const res = await dispatch(getLoginInformation(data));
    if (res.payload) {
      const response = await dispatch(getCurrentUser());
      if (response.payload) {
        navigate('/app/main');
      }
    }
  };
  const userNameOrEmailAddressRegister = register('userNameOrEmailAddress');
  const passwordRegister = register('password');
  const rememberClientsRegister = register('rememberClients');

  const handleShowCode = () => {
    setShowCode(!showCode);
  };

  return (
    <>
    <SnackbarAlert {...snackbarAlert} />
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="h3">Log in</Typography>
      <Grid container direction="column">
        <div className={classes['form-control']}>
          <PersonIcon />
          <TextField
            type="text"
            className={classes['form-control__input']}
            label="User name or email"
            color="secondary"
            required
            {...userNameOrEmailAddressRegister}
            error={!!errors.userNameOrEmailAddress}
            helperText={errors.userNameOrEmailAddress?.message ?? ''}
          />
        </div>
        <div className={classes['form-control']}>
          <HttpsIcon />
          <TextField
            className={classes['form-control__input']}
            type="password"
            label="Password"
            color="secondary"
            required
            {...passwordRegister}
            error={!!errors.password}
            helperText={errors.password?.message ?? ''}
          />
        </div>
        <div className={classes['form-remember']}>
          <FormControlLabel
            control={<Checkbox {...rememberClientsRegister} />}
            label="Remember me"
          />
          <Button
            variant="contained"
            type="submit"
            className={classes['btn-login']}
            disableRipple={true}
            disableElevation
            disabled={!isValid}
          >
            Log in
          </Button>
        </div>
        <Button
          className={classes['btn-login-google']}
          variant="contained"
          disableElevation
          color="primary"
        >
          Log In With Google
        </Button>
        <div className={classes['form-security']}>
          <TextField
            className={classes['form-security__input']}
            type={showCode ? 'text' : 'password'}
            label="Security Code"
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes['form-security__actions']}
                >
                  {showCode ? (
                    <VisibilityOffIcon onClick={handleShowCode} />
                  ) : (
                    <VisibilityIcon onClick={handleShowCode} />
                  )}
                  <Tooltip
                    title="please enter security code if your email is not @ncc.asia"
                    placement="bottom-start"
                  >
                    <HelpOutlineOutlinedIcon />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </Grid>
    </form>
    </>
  );
}

export default Form;

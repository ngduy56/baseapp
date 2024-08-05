import { Typography } from '@material-ui/core';
import { Outlet } from 'react-router-dom';
import { useStyles } from 'layouts/AccountLayout/style';

function Account() {
  const classes = useStyles();

  return (
    <div className={classes.authentication}>
      <div className={classes['login-form']}>
        <Typography variant="h1">Timesheet</Typography>
        <Outlet />
        <Typography variant="body1" className={classes['app-version']}>
          © 2022 Timesheet. Version 4.3.0.0 [20220605]
        </Typography>
      </div>
    </div>
  );
}

export default Account;

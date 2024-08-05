import { Typography } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import { getTaskAlertInformation } from 'app/selectors';
import Content from 'common/components/Content';
import SnackbarAlert, {
  SnackbarAlertType,
} from 'common/components/SnackbarAlert';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { removeAlert } from '../store/taskManagerSlice';
import { getAllTasks } from '../store/thunkActions';

function TaskManager() {
  const dispatch = useAppDispatch();
  const snackbarAlert: SnackbarAlertType = useSelector(getTaskAlertInformation);
  snackbarAlert.handleClose = () => {
    dispatch(removeAlert());
  };

  const handleRefresh = async () => {
    try {
      await dispatch(getAllTasks());
    } catch (errors) {
      throw new Error(String(errors));
    }
  };

  return (
    <>
      <SnackbarAlert {...snackbarAlert} />
      <Content title="Manage Tasks" handleRefresh={handleRefresh}>
        <Typography component="div">
          <Outlet />
        </Typography>
      </Content>
    </>
  );
}

export default TaskManager;

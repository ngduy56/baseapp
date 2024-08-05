import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button, ListItem, ListItemText, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import { useStyles } from 'features/TaskManager/components/TaskSection/Body/TaskItem/style';
import {
  archiveTask,
  deArchiveTask,
  deleteTask,
} from 'features/TaskManager/store/thunkActions';
import { Task } from 'features/TaskManager/types';
import { cancelButtonColor, confirmButtonColor } from 'themes/MainTheme';

type Props = {
  task: Task;
};

function TaskItem({ task }: Props) {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (edit) {
      navigate(`edit/${task.id}`);
    }
  }, [edit]);

  const handleArchive = async () => {
    try {
      const confirm = await Swal.fire({
        title: 'Are you sure?',
        text: `Archive task: "${task.name}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonText: 'Yes',
        reverseButtons: true,
      });
      if (confirm.isConfirmed) {
        await dispatch(archiveTask(task.id));
      }
    } catch (errors) {
      throw new Error(String(errors));
    }
  };

  const handleUnarchive = async () => {
    try {
      const confirm = await Swal.fire({
        title: 'Are you sure?',
        text: `Unarchive task: "${task.name}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonText: 'Yes',
        reverseButtons: true,
      });
      if (confirm.isConfirmed) {
        await dispatch(deArchiveTask(task.id));
      }
    } catch (errors) {
      throw new Error(String(errors));
    }
  };

  const handleDelete = async () => {
    try {
      const confirm = await Swal.fire({
        title: 'Are you sure?',
        text: `Delete task: "${task.name}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonText: 'Yes',
        reverseButtons: true,
      });
      if (confirm.isConfirmed) {
        await dispatch(deleteTask(task.id));
      }
    } catch (errors) {
      throw new Error(String(errors));
    }
  };

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <ListItem
      disableGutters={true}
      divider={true}
      className={classes['task-item']}
    >
      <Button
        variant="contained"
        className={classes.btn}
        disableFocusRipple={true}
        onClick={handleEdit}
      >
        Edit
      </Button>
      <ListItemText className={classes.title}>{task.name}</ListItemText>
      <Typography component="div">
        {task.type === 0 &&
          (!task.isDeleted ? (
            <Button
              variant="contained"
              className={classes.btn}
              onClick={handleArchive}
            >
              Archive
            </Button>
          ) : (
            <Button
              variant="contained"
              className={classes.btn}
              onClick={handleUnarchive}
            >
              Unarchive
            </Button>
          ))}
        <Button
          variant="contained"
          className={classes.btn}
          disabled={!task.isDeleted}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Typography>
    </ListItem>
  );
}

export default TaskItem;

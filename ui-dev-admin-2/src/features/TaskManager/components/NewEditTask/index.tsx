import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Task } from 'features/TaskManager/types';
import { useStyles } from 'features/TaskManager/components/NewEditTask/style';
import { saveTask } from 'features/TaskManager/store/thunkActions';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  editTask,
  resetTaskEdit,
} from 'features/TaskManager/store/taskManagerSlice';
import { getTaskEdit } from 'app/selectors';

const taskTypes = [
  {
    name: 'Common Task',
    value: 0,
  },
  {
    name: 'Other Task',
    value: 1,
  },
];

const schema = yup.object().shape({
  name: yup.string().required(),
  type: yup.number(),
});

function NewEditTask() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [backHome, setBackHome] = useState(false);

  useEffect(() => {
    if (backHome) {
      navigate('/app/main/tasks');
    }
  }, [backHome, navigate]);

  const params = useParams();

  useEffect(() => {
    if (params.taskId) {
      let taskId = Number.parseInt(params.taskId);
      (async () => {
        await dispatch(editTask(taskId));
      })();
    }
  }, []);

  let task = useAppSelector(getTaskEdit);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
  } = useForm<Task>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      name: task.name,
      type: task.type,
    },
  });

  useEffect(() => {
    if (task.id >= 0) {
      setValue('name', task.name);
      setValue('type', task.type);
    }
  }, [setValue, task]);

  useEffect(() => {
    return () => {
      dispatch(resetTaskEdit());
    };
  }, []);

  const onSubmit = async (data: Task) => {
    const taskRequest: Task = {
      ...data,
      id: task.id < 0 ? 0 : task.id,
      isDeleted: task.id < 0 ? false : task.isDeleted,
    };
    try {
      await dispatch(saveTask(taskRequest));
      setBackHome(true);
    } catch (errors) {
      setBackHome(true);
      throw new Error(String(errors));
    }
  };

  const handleCancel = () => {
    setBackHome(true);
  };
  return (
    <Container className={classes['new-edit-task']} disableGutters>
      <Typography variant="h1">
        {task.id < 0 ? 'New Task' : `Edit Task: ${task.name}`}
      </Typography>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          label="Name"
          className={classes['task-name']}
          color="primary"
          required
          fullWidth={true}
          {...register('name')}
          error={!!errors.name}
        />
        <FormControl fullWidth={true} className={classes['form-control']}>
          <InputLabel id="select-task-type">Task Type</InputLabel>
          <Select
            labelId="select-task-type"
            defaultValue={task.id < 0 ? 0 : task.type}
            {...register('type')}
          >
            {taskTypes.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Grid className={classes['form-actions']}>
          <Button
            variant="contained"
            className={classes['btn-cancel']}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isValid}
          >
            Save
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

export default NewEditTask;

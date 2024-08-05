import { List, Typography, Divider } from '@material-ui/core';
import { useStyles } from 'features/TaskManager/components/TaskSection/Body/style';
import { useContext } from 'react';
import { TaskListContext } from '../../Main';
import TaskItem from './TaskItem';

function TaskSectionBody() {
  const classes = useStyles();
  const taskList = useContext(TaskListContext);

  return (
    <Typography component="div" className={classes.body}>
      <Typography variant="h4" className={classes.heading}>
        Name
      </Typography>
      <Divider />
      <List disablePadding={true}>
        {taskList.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </List>
    </Typography>
  );
}

export default TaskSectionBody;

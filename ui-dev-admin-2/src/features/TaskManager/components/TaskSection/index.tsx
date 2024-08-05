import { Divider } from '@material-ui/core';
import TaskSectionHeader, {
  TaskSectionHeaderType,
} from 'features/TaskManager/components/TaskSection/Header';
import TaskSectionBody from 'features/TaskManager/components/TaskSection/Body';
import { useStyles } from './style';

function TaskSection({ title, description, quantity }: TaskSectionHeaderType) {
  const classes = useStyles();

  return (
    <div className={classes['task-section']}>
      <TaskSectionHeader
        title={title}
        description={description}
        quantity={quantity}
      />
      <Divider />
      <TaskSectionBody />
    </div>
  );
}

export default TaskSection;

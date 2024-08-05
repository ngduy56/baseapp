import { Typography } from '@material-ui/core';
import { useStyles } from 'features/TaskManager/components/TaskSection/Header/style';

export type TaskSectionHeaderType = {
  title: string;
  description: string;
  quantity: number;
};

function TaskSectionHeader({
  title,
  description,
  quantity,
}: TaskSectionHeaderType) {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes.header}>
      <Typography variant="h4" className={classes.title}>
        {title} (<span>{quantity}</span>)
      </Typography>
      <Typography variant="body1" className={classes.description}>
        {description}
      </Typography>
    </Typography>
  );
}

export default TaskSectionHeader;

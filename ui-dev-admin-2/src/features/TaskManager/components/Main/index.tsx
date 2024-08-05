import { useAppDispatch } from 'app/hooks';
import { getTaskList, getAllTasks as getTasks } from 'app/selectors';
import { getAllTasks } from 'features/TaskManager/store/thunkActions';
import { Task } from 'features/TaskManager/types';
import React, { createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddSearchTask from '../AddSearch';
import TaskSection from '../TaskSection';

type Props = {};

export const TaskListContext = createContext<Task[]>([]);

function TaskManagerMain({}: Props) {
  const taskList = useSelector(getTaskList);
  const allTasks = useSelector(getTasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!allTasks.length) {
      (async () => {
        try {
          await dispatch(getAllTasks());
        } catch (errors) {
          throw new Error(String(errors));
        }
      })();
    }
  }, [dispatch, taskList.length]);

  const commonTaskList = taskList.filter((task) => task.type === 0);
  const otherTaskList = taskList.filter((task) => task.type === 1);

  return (
    <>
      <AddSearchTask />
      <TaskListContext.Provider value={commonTaskList}>
        <TaskSection
          title="Common Task"
          description="These tasks are automatically added to all new projects"
          quantity={commonTaskList.length}
        />
      </TaskListContext.Provider>
      <TaskListContext.Provider value={otherTaskList}>
        <TaskSection
          title="Other Task"
          description="These task must be manually added to projects"
          quantity={otherTaskList.length}
        />
      </TaskListContext.Provider>
    </>
  );
}

export default TaskManagerMain;

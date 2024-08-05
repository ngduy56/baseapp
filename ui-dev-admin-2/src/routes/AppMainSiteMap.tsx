import { lazy } from 'react';

const MainApp = lazy(() => import('common/components/MainApp'));
const TaskManager = lazy(
  () => import('features/TaskManager/components/TaskManager')
);
const ProjectManager = lazy(
  () => import('features/ProjectManager/components/ProjectManager')
);
const NewEditTask = lazy(
  () => import('features/TaskManager/components/NewEditTask')
);
const TaskManagerMain = lazy(
  () => import('features/TaskManager/components/Main')
);

export const siteMap = [
  {
    path: 'home',
    component: MainApp,
  },
  {
    path: 'tasks',
    component: TaskManager,
    childComponents: [
      {
        path: '',
        component: TaskManagerMain,
      },
      {
        path: 'new',
        component: NewEditTask,
      },
      {
        path: 'edit/:taskId',
        component: NewEditTask,
      },
    ],
  },
  {
    path: 'projects',
    component: ProjectManager,
  },
];

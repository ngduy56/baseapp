import HomeIcon from '@material-ui/icons/Home';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

export const dashboard = [
  {
    to: 'main/home',
    icon: HomeIcon,
    title: 'Home',
  },
  {
    to: 'main/tasks',
    icon: ImportContactsIcon,
    title: 'Tasks',
  },
  {
    to: 'main/projects',
    icon: InsertChartIcon,
    title: 'Projects',
  },
];

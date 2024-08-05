import {
  Container,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { useStyles } from 'common/components/Sidebar/Body/style';
import { dashboard } from 'common/dashboard';

function Body() {
  const classes = useStyles();
  return (
    <Container className={classes['left-sidebar__body']} disableGutters>
      <List component="nav" disablePadding>
        {dashboard.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                isActive ? classes.active : 'inactive'
              }
            >
              <ListItem button>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Container>
  );
}

export default Body;

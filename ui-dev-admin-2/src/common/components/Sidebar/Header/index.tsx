import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Avatar,
  Container,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import { logout } from 'features/Authentication/store/loginSlice';
import { useSelector } from 'react-redux';
import { userInformation } from 'app/selectors';
import { useStyles } from 'common/components/Sidebar/Header/style';

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const user = useSelector(userInformation);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Container
      component="header"
      className={`pd-15 ${classes['left-sidebar__header']}`}
      disableGutters
    >
      <Container disableGutters>
        <Avatar alt="User" src={user.avatarPath} />
      </Container>
      <Container className={classes['user-information']} disableGutters>
        <Typography variant="body2">{`${user.name} ${user.surname}`}</Typography>
        <Typography variant="body2">{`${user.emailAddress}`}</Typography>
      </Container>
      <Container
        className={classes['logout']}
        component="span"
        maxWidth={false}
        disableGutters
      >
        <span onClick={handleClick}>
          <ExpandMoreIcon />
        </span>
        <Menu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </MenuItem>
        </Menu>
      </Container>
    </Container>
  );
}

export default Header;

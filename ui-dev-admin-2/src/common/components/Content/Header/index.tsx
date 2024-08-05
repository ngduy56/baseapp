import {
  Container,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RefreshIcon from '@material-ui/icons/Refresh';
import { useState } from 'react';
import { useStyles } from 'common/components/Content/Header/style';

type Props = {
  title: string;
  handleRefresh: () => void;
};

function Header({ title, handleRefresh }: Props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Container className={classes['content-header']}>
      <Typography variant="h2">{title}</Typography>
      <Container maxWidth={false} component="span" disableGutters>
        <span onClick={handleClick}>
          <MoreVertIcon />
        </span>
        <Menu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleRefresh}>
            <ListItemIcon>
              <RefreshIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Refresh" />
          </MenuItem>
        </Menu>
      </Container>
    </Container>
  );
}

export default Header;

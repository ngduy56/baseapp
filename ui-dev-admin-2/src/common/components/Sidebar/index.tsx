import { Drawer } from '@material-ui/core';
import SidebarHeader from 'common/components/Sidebar/Header';
import SidebarBody from 'common/components/Sidebar/Body';
import SidebarFooter from 'common/components/Sidebar/Footer';
import { useStyles } from 'common/components/Sidebar/style';

function Sidebar() {
  const classes = useStyles();
  return (
    <Drawer
      className={classes['left-sidebar']}
      PaperProps={{
        elevation: 7,
      }}
      open={true}
      variant="persistent"
    >
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter />
    </Drawer>
  );
}

export default Sidebar;

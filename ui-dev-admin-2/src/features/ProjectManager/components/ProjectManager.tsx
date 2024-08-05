import Content from 'common/components/Content';
import {useStyles} from 'features/ProjectManager/components/style';

function ProjectManager() {
  const classes = useStyles();

  const handleRefresh = () => {};
  return (
    <Content title="Manage Projects" handleRefresh={handleRefresh}>
      <div>ProjectManager</div>
    </Content>
  );
}

export default ProjectManager;

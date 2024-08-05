import { Container, Typography } from '@material-ui/core';
import { useStyles } from 'common/components/Sidebar/Footer/style';

function Footer() {
  const classes = useStyles();
  return (
    <Container
      className={`pd-15 ${classes['left-sidebar__footer']}`}
      disableGutters
    >
      <Typography>
        © 2022{' '}
        <span>
          <strong>Timesheet</strong>
        </span>
        .
      </Typography>
      <Typography>
        <strong>Version</strong> 4.3.0.0 [20221606]
      </Typography>
    </Container>
  );
}

export default Footer;

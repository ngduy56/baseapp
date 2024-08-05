import { Typography } from '@material-ui/core';
import { useStyles } from 'common/components/Content/Body/style';

type Props = {
  children: JSX.Element;
};

function Body({ children }: Props) {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes['content-body']}>
      {children}
    </Typography>
  );
}

export default Body;

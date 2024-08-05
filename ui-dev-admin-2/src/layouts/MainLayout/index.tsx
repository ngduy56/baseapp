import Header from 'common/components/Header';
import Sidebar from 'common/components/Sidebar';
import { useStyles } from 'layouts/MainLayout/style';

type Props = {
  children: JSX.Element;
};

function MainLayout({ children }: Props) {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes['main-container']}>
        <Sidebar />
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;

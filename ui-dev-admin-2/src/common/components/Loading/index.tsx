import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import loadingGif from 'assets/images/loading.gif';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { accessTokenSelector } from 'app/selectors';
import { getCurrentUser } from 'features/Authentication/store/thunkActions';
import { useStyles } from 'common/components/Loading/style';

function Loading(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const accessToken = useAppSelector(accessTokenSelector);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      if (location.pathname === '/') {
        if (accessToken) {
          const response = await dispatch(getCurrentUser());
          if (response.payload) {
            navigate('/app/main');
          }
        } else {
          navigate('/account/login');
        }
      }
    })();
  }, [accessToken, dispatch, location.pathname, navigate]);

  return (
    <div className={classes.loading}>
      <img src={loadingGif} alt="loading" className={classes.loading__gif} />
    </div>
  );
}

export default Loading;
